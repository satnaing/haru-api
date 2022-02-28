import request from "supertest";
import app from "../app";
import "jest-extended";
import prisma from "../prisma/client";
import {
  errorTypes,
  authRequiredError,
  incorrectCredentialsError,
} from "../utils/errorObject";

const url = "/api/v1/auth";

const newUser = {
  email: "newuser7j@gmail.com",
  fullname: "newuser",
  password: "newuserpassword",
  shippingAddress: "yangon",
  phone: "09283928",
};

const updateUser = {
  fullname: "new username",
  email: "updatedemail3@gmail.com",
  shippingAddress: "updated shipping addr",
  phone: "099384938",
};

let authToken: string;

describe("Auth Controller", () => {
  describe("Regsiter Customer", () => {
    it("POST /auth/register --> should register new customer", async () => {
      const response = await request(app)
        .post(`${url}/register`)
        .send(newUser)
        .expect("Content-Type", /json/)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.token).toBeString();
    });

    it("POST /auth/register --> should throw error if required fields not include", async () => {
      const response = await request(app)
        .post(`${url}/register`)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: "invalidArgument",
        message: "invalid one or more argument(s)",
        detail: [
          {
            code: "missingEmail",
            message: "email field is missing",
          },
          {
            code: "missingFullname",
            message: "fullname field is missing",
          },
          {
            code: "missingPassword",
            message: "password field is missing",
          },
        ],
      });
    });

    it("POST /auth/register --> should throw error if email already exists", async () => {
      const response = await request(app)
        .post(`${url}/register`)
        .send({ ...newUser, email: "dgohn0@gravatar.com" })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: "alreadyExists",
        message: "email already exists",
      });
    });

    it("POST /auth/register --> should validate email", async () => {
      const response = await request(app)
        .post(`${url}/register`)
        .send({ ...newUser, email: "thisisnotavalidemailaddress" })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: errorTypes.invalidArgument,
        message: "email is not valid",
      });
    });
  });

  describe("Update Customer", () => {
    let loginToken = "";
    it("PUT /auth/update-details --> should update customer data (self)", async () => {
      // login
      const loginRresponse = await request(app)
        .post(`${url}/login`)
        .send({ email: newUser.email, password: newUser.password })
        .expect("Content-Type", /json/)
        .expect(200);

      loginToken = loginRresponse.body.token;

      const response = await request(app)
        .put(`${url}/update-details`)
        .set("Authorization", "Bearer " + loginToken)
        .send(updateUser)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual({
        ...updateUser,
        updatedAt: expect.any(String),
      });
    });

    it("PUT /auth/change-password --> should return error if current password is incorrect", async () => {
      const response = await request(app)
        .put(`${url}/change-password`)
        .set("Authorization", "Bearer " + loginToken)
        .send({
          currentPassword: "wrong password",
          newPassword: "newpassword",
        })
        .expect("Content-Type", /json/)
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        ...incorrectCredentialsError,
        message: "current password is incorrect",
      });
    });

    it("PUT /auth/change-password --> should update password", async () => {
      const response = await request(app)
        .put(`${url}/change-password`)
        .set("Authorization", "Bearer " + loginToken)
        .send({
          currentPassword: newUser.password,
          newPassword: "newpassword",
        })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toEqual("password has been updated");

      // delete user after register and test
      const deleteUser = await prisma.customer.delete({
        where: { email: updateUser.email },
      });
      expect(deleteUser).toBeDefined();
    });
  });

  describe("Login Customer", () => {
    it("POST /auth/login --> should login customer", async () => {
      const response = await request(app)
        .post(`${url}/login`)
        .send({ email: "demo@gmail.com", password: "demopassword" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.token).toBeString();
      authToken = response.body.token;
    });

    it("POST /auth/login --> should throw error if required fields not include", async () => {
      const response = await request(app)
        .post(`${url}/login`)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: "invalidArgument",
        message: "invalid one or more argument(s)",
        detail: [
          {
            code: "missingEmail",
            message: "email field is missing",
          },
          {
            code: "missingPassword",
            message: "password field is missing",
          },
        ],
      });
    });

    it("POST /auth/login --> should throw error if email or password is incorrect", async () => {
      const response = await request(app)
        .post(`${url}/login`)
        .send({ email: "dummy@gmail.com", password: "wrongpassword" })
        .expect("Content-Type", /json/)
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(incorrectCredentialsError);
    });
  });

  describe("Access Protected Route", () => {
    it("GET /auth/me --> should require authentication", async () => {
      const response = await request(app)
        .get(`${url}/me`)
        .expect("Content-Type", /json/)
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(authRequiredError);
    });

    it("GET /auth/me --> should return logged in user", async () => {
      const response = await request(app)
        .get(`${url}/me`)
        .set("Authorization", "Bearer " + authToken)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual({
        id: expect.any(Number),
        fullname: expect.any(String),
        email: expect.any(String),
        shippingAddress: expect.any(String),
        phone: expect.toBeOneOf([String, null]),
      });
    });
  });

  describe("Forgot and Reset Password", () => {
    it("POST /auth/forgot-password --> should throws error if email not include", async () => {
      const response = await request(app)
        .post(`${url}/forgot-password`)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: errorTypes.invalidArgument,
        message: "invalid one or more argument(s)",
        detail: [
          {
            code: "missingEmail",
            message: "email field is missing",
          },
        ],
      });
    });

    it("POST /auth/forgot-password --> should throws 404 error if email not found", async () => {
      const response = await request(app)
        .post(`${url}/forgot-password`)
        .send({ email: "invalidemail@gmail.com" })
        .expect("Content-Type", /json/)
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 404,
        type: "notFound",
        message: "record to update not found.",
      });
    });

    // it("POST /auth/forgot-password --> should send email", async () => {
    //   const response = await request(app)
    //     .post(`${url}/forgot-password`)
    //     .send({ email: "dgohn0@gravatar.com" })
    //     .expect("Content-Type", /json/)
    //     .expect(200);

    //   expect(response.body.success).toBe(true);
    //   expect(response.body.message).toEqual("Email has been sent...");
    // });

    /*=========== Reset Password ===========*/

    it("POST /auth/reset-password/resetToken --> should throws error if password not include", async () => {
      const response = await request(app)
        .put(`${url}/reset-password/resetToken`)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: errorTypes.invalidArgument,
        message: "invalid one or more argument(s)",
        detail: [
          {
            code: "missingPassword",
            message: "password field is missing",
          },
        ],
      });
    });
  });
});
