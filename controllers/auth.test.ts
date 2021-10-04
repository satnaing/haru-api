import request from "supertest";
import app from "../app";
import "jest-extended";
import prisma from "../prisma/client";

const url = "/api/v1/auth";

describe("Auth Controller", () => {
  it("POST /auth/register --> should register new customer", async () => {
    const newUser = {
      email: "newuser4@gmail.com",
      fullname: "newuser",
      password: "newuserpassword",
      shippingAddress: "yangon",
      phone: "09283928",
    };
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
});
