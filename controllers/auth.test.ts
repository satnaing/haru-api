import request from "supertest";
import app from "../app";
import "jest-extended";
import prisma from "../prisma/client";
import { errorTypes, unauthAccess, unauthError } from "../utils/errorObject";

const url = "/api/v1/auth";

const newUser = {
  email: "newuser8@gmail.com",
  fullname: "newuser",
  password: "newuserpassword",
  shippingAddress: "yangon",
  phone: "09283928",
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

      // delete user after register
      const deleteUser = await prisma.customer.delete({
        where: { email: newUser.email },
      });
      expect(deleteUser).toBeDefined();
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
          {
            code: "missingShippingAddress",
            message: "shippingAddress field is missing",
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
      expect(response.body.error).toEqual(unauthError);
    });
  });

  describe("Access Protected Route", () => {
    it("GET /auth/me --> should require authentication", async () => {
      const response = await request(app)
        .get(`${url}/me`)
        .expect("Content-Type", /json/)
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(unauthAccess);
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
});
