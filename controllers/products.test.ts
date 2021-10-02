import request from "supertest";
import app from "../app";
import "jest-sorted";
import { errorTypes } from "../utils/errorObject";

const url = `/api/v1/products`;

describe("Product Controler", () => {
  describe("Get Products", () => {
    it("GET /products --> return all products", async () => {
      const response = await request(app)
        .get(url)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.count).not.toBeUndefined();
      expect(response.body.success).toBeTruthy();
      expect(response.body.success).toBe(true);
      expect(response.body).toEqual({
        success: true,
        count: expect.any(Number),
        data: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(String),
            discountPercent: expect.any(Number || null),
            description: expect.any(String),
            detail: expect.any(String || null),
            categoryId: expect.any(Number),
            // // category: expect.any(Array),
            image1: expect.any(String),
            image2: expect.any(String),
            stock: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: null,
          }),
        ]),
      });
    });

    it("GET /products --> select name, price", async () => {
      const response = await request(app)
        .get(url)
        .query({ select: "name,price" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.count).toEqual(expect.any(Number));
      expect(response.body.data).toEqual(
        expect.arrayContaining([
          {
            name: expect.any(String),
            price: expect.any(String),
          },
        ])
      );
    });

    it("GET /products --> order_by name", async () => {
      const response = await request(app)
        .get(url)
        .query({ order_by: "name" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.count).toEqual(expect.any(Number));
      expect(response.body.data).toBeSortedBy("name");
    });

    // Pagination skip & take
    it("GET /products --> pagination | skip 40, limit 10", async () => {
      const response = await request(app)
        .get(url)
        .query({ limit: 10, offset: 50 })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.count).toEqual(expect.any(Number));
      expect(response.body.data.length).toBe(10);
      expect(response.body.data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 51 }),
          expect.objectContaining({ id: 60 }),
        ])
      );
    });

    // Price equals gt lte
    it("GET /products --> price gte 50 & lt 100", async () => {
      const response = await request(app)
        .get(url)
        .query({ price: ["gte:50", "lt:100"] })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.count).toEqual(expect.any(Number));
      for (let obj of response.body.data) {
        expect(parseFloat(obj.price)).toBeGreaterThanOrEqual(50);
        expect(parseFloat(obj.price)).toBeLessThan(100);
      }
    });

    // Price greater than
    it("GET /products --> price gt 50", async () => {
      const response = await request(app)
        .get(url)
        .query({ price: "gt:50" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.count).toEqual(expect.any(Number));
      for (let obj of response.body.data) {
        expect(parseFloat(obj.price)).toBeGreaterThan(50);
      }
    });

    // Stock equals 58
    it("GET /products --> stock equals 58", async () => {
      const response = await request(app)
        .get(url)
        .query({ stock: "equals:58" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.count).toEqual(expect.any(Number));
      for (let obj of response.body.data) {
        expect(parseFloat(obj.stock)).toEqual(58);
      }
    });

    // Error if more stock or price param is more than twice
    it("GET /products --> error price if same param > 2", async () => {
      const response = await request(app)
        .get(url)
        .query({ price: ["gte:50", "lt:100", "gt:60"] })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBeFalsy();
      expect(response.body.count).toBeUndefined();
      expect(response.body.error).toEqual({
        status: 400,
        type: errorTypes.badRequest,
        message: "same parameter cannot be more than twice",
      });
    });

    // Error if more stock or stock param is more than twice
    it("GET /products --> error stock if same param > 2", async () => {
      const response = await request(app)
        .get(url)
        .query({ stock: ["gte:50", "lt:100", "gt:60"] })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBeFalsy();
      expect(response.body.count).toBeUndefined();
      expect(response.body.error).toEqual({
        status: 400,
        type: errorTypes.badRequest,
        message: "same parameter cannot be more than twice",
      });
    });

    // Search Proucts
    it("GET /products/search --> return searched items", async () => {
      const response = await request(app)
        .get(`${url}/search`)
        .query({ q: "Aerified" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.count).toEqual(1);
      expect(response.body.data).toEqual([
        expect.objectContaining({
          name: "Aerified",
        }),
      ]);
    });

    // Select Specific product including its related category

    // it("GET /products/:id --> return specific product", async () => {});

    // it("GET /products/:id --> 404 if not found", async () => {});
  });
});
