import request from "supertest";
import app from "../app";
import "jest-sorted";

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

    // Stock equals gt lte
    it("GET /products --> stocks gte 50", async () => {});

    // Price equals gt lte
    it("GET /products --> price gte 50 & lt 100", async () => {
      const response = await request(app)
        .get(url)
        .query({ price: ["gte:50", "lt:100"] })
        .expect("Content-Type", /json/)
        .expect(200);
    });

    // Select Specific product including its related category

    it("GET /products/:id --> return specific product", async () => {});

    it("GET /products/:id --> 404 if not found", async () => {});
  });
});
