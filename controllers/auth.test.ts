import request from "supertest";
import app from "../app";
import "jest-extended";
import prisma from "../prisma/client";

const url = "/api/v1/auth";

const newUser = {
  email: "newuser8@gmail.com",
  fullname: "newuser",
  password: "newuserpassword",
  shippingAddress: "yangon",
  phone: "09283928",
};

describe("Auth Controller", () => {
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
});
