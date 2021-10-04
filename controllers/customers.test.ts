import request from "supertest";
import app from "../app";
import "jest-extended";
const url = "/api/v1/customers";

describe("Customers", () => {
  describe("Get Customers", () => {
    it("GET /customers --> should return all customers", async () => {
      const response = await request(app)
        .get(url)
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
  });
});
