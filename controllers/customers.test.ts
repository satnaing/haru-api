import request from "supertest";
import app from "../app";
import "jest-extended";
import { errorTypes, resource404Error } from "../utils/errorObject";
import prisma from "../prisma/client";

const url = "/api/v1/customers";

let authToken = "";

// Login as superadmin
const adminLogin = async () => {
  const response = await request(app)
    .post(`/api/v1/admins/login`)
    .send({ email: "superadmin@gmail.com", password: "superadmin" });
  authToken = response.body.token;
};

beforeAll(() => adminLogin());

describe("Customers", () => {
  describe("Get Customers", () => {
    it("GET /customers --> should return all customers", async () => {
      const response = await request(app)
        .get(url)
        .set("Authorization", "Bearer " + authToken)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.count).toBeGreaterThanOrEqual(0);
      expect(response.body.data).toEqual(
        expect.arrayContaining([
          {
            id: expect.any(Number),
            fullname: expect.any(String),
            email: expect.any(String),
            shippingAddress: expect.any(String),
            phone: expect.toBeOneOf([expect.any(String), null]),
            createdAt: expect.any(String),
            updatedAt: expect.toBeOneOf([expect.any(String), null]),
          },
        ])
      );
    });

    it("GET /customers/:id --> should return specific customer", async () => {
      const response = await request(app)
        .get(`${url}/3`)
        .set("Authorization", "Bearer " + authToken)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual({
        id: expect.any(Number),
        fullname: expect.any(String),
        email: expect.any(String),
        shippingAddress: expect.any(String),
        phone: expect.toBeOneOf([expect.any(String), null]),
        createdAt: expect.any(String),
        updatedAt: expect.toBeOneOf([expect.any(String), null]),
      });
    });

    it("GET /customers/:id --> should throw 404 if customer not found", async () => {
      const response = await request(app)
        .get(`${url}/999`)
        .set("Authorization", "Bearer " + authToken)
        .expect("Content-Type", /json/)
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(resource404Error("customer"));
    });
  });

  describe("Delete Customer", () => {
    it("DELETE /customers/:id --> should delete a customer", async () => {
      // create a customer to be deleted
      const customer = await prisma.customer.create({
        data: {
          email: "testuser3@gmail.com",
          fullname: "testuser",
          password: "somerandompwd",
          shippingAddress: "someaddr",
          createdAt: new Date().toISOString(),
        },
      });
      const response = await request(app)
        .delete(`${url}/${customer.id}`)
        .set("Authorization", "Bearer " + authToken)
        .expect(204);
    });

    it("DELETE /customers/:id --> should return 404 if user not found", async () => {
      const response = await request(app)
        .delete(`${url}/9999`)
        .set("Authorization", "Bearer " + authToken)
        .expect("Content-Type", /json/)
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 404,
        type: errorTypes.notFound,
        message: "record to delete does not exist.",
      });
    });
  });
});
