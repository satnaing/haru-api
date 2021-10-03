import request from "supertest";
import app from "../app";
import "jest-sorted";
import {
  errorTypes,
  invalidQuery,
  resource404Error,
} from "../utils/errorObject";

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

    // Get Specific product
    it("GET /products/:id --> return specific product", async () => {
      const response = await request(app)
        .get(`${url}/5`)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.data.id).toBe(5);
    });

    // 404 Error if product not found
    it("GET /products/:id --> 404 Error if not found", async () => {
      const response = await request(app)
        .get(`${url}/999`)
        .expect("Content-Type", /json/)
        .expect(404);

      expect(response.body.success).toBeFalsy();
      expect(response.body.error).toEqual(resource404Error);
    });

    // include related categories
    it("GET /products/:id --> include related category", async () => {
      const response = await request(app)
        .get(`${url}/5`)
        .query({ include: "category" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBeTruthy();
      expect(response.body.data.category).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
        })
      );
    });

    // error if include value is not "category"
    it("GET /products/:id --> validation for include: 'category'", async () => {
      const response = await request(app)
        .get(`${url}/5`)
        .query({ include: "categories" })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(invalidQuery);
    });
  });

  describe("Create Product", () => {
    it("GET /products --> create a new product", async () => {
      const newProduct = {
        name: "test product",
        price: "500",
        description: "this is test product",
        detail: "this is product detail. Just a testing",
        categoryId: 3,
        image1: "imageurl.com/png",
        image2: "imageur2.com/png",
        stock: "10",
      };
      const response = await request(app)
        .post(url)
        .send(newProduct)
        .expect("Content-Type", /json/)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(String),
        discountPercent: expect.any(Number || null),
        description: expect.any(String),
        detail: expect.any(String || null),
        categoryId: expect.any(Number),
        // category: expect.any(Array),
        image1: expect.any(String),
        image2: expect.any(String),
        stock: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: null,
      });
    });

    it("GET /products --> throws error if required field is missing", async () => {
      const response = await request(app)
        .post(url)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      // expect(response.body.error).toEqual(missingField("name"));
      expect(response.body.error).toEqual({
        status: 400,
        type: "invalidArgument",
        message: "invalid one or more argument(s)",
        detail: [
          {
            code: "missingName",
            message: "name field is missing",
          },
          {
            code: "missingPrice",
            message: "price field is missing",
          },
          {
            code: "missingDescription",
            message: "description field is missing",
          },
          {
            code: "missingImage1",
            message: "image1 field is missing",
          },
          {
            code: "missingImage2",
            message: "image2 field is missing",
          },
        ],
      });
    });

    it("GET /products --> throws error if categoryId is invalid", async () => {
      const reqBody = {
        name: "Wallie",
        price: "1500",
        description: "this is just a description",
        image1: "image1.png",
        image2: "image2.png",
        categoryId: 99,
      };
      const response = await request(app)
        .post(url)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: errorTypes.invalidArgument,
        message: "invalid category id",
        detail: [
          {
            code: "invalidCategory",
            message: `there is no category with id 99`,
          },
        ],
      });
    });

    it("GET /products --> throws error if price field is invalid", async () => {
      const reqBody = {
        name: "Wallie",
        price: "some string",
        description: "this is just a description",
        image1: "image1.png",
        image2: "image2.png",
        categoryId: 2,
      };
      const response = await request(app)
        .post(url)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: errorTypes.invalidArgument,
        message: "invalid price field",
        detail: [
          {
            code: "invalidPrice",
            message: `price field must only be number`,
          },
        ],
      });
    });

    it("GET /products --> throws error if stock field is invalid", async () => {
      const reqBody = {
        name: "Wallie",
        price: "300",
        description: "this is just a description",
        image1: "image1.png",
        image2: "image2.png",
        stock: "some string",
        categoryId: 2,
      };
      const response = await request(app)
        .post(url)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 400,
        type: errorTypes.invalidArgument,
        message: "invalid stock field",
        detail: [
          {
            code: "invalidStock",
            message: `stock field must only be integer`,
          },
        ],
      });

      const reqBody2 = { ...reqBody, stock: "23.22" };
      const response2 = await request(app)
        .post(url)
        .send(reqBody2)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response2.body.success).toBe(false);
      expect(response2.body.error).toEqual({
        status: 400,
        type: errorTypes.invalidArgument,
        message: "invalid stock field",
        detail: [
          {
            code: "invalidStock",
            message: `stock field must only be positive integer`,
          },
        ],
      });
    });
  });
});
