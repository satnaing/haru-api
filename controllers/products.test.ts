import request from "supertest";
import app from "../app";
import "jest-sorted";
import {
  errorTypes,
  invalidQuery,
  resource404Error,
} from "../utils/errorObject";
import prisma from "../prisma/client";

const url = `/api/v1/products`;

let authToken = "";

const adminLogin = async () => {
  const response = await request(app)
    .post(`/api/v1/admins/login`)
    .send({ email: "superadmin@gmail.com", password: "superadmin" });
  authToken = response.body.token;
};

beforeAll(() => adminLogin());

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
      expect(response.body.error).toEqual(resource404Error("product"));
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
    it("POST /products --> create a new product", async () => {
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
        .set("Authorization", "Bearer " + authToken)
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

    it("POST /products --> throws error if required field is missing", async () => {
      const response = await request(app)
        .post(url)
        .set("Authorization", "Bearer " + authToken)
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

    it("POST /products --> throws error if categoryId is invalid", async () => {
      const reqBody = {
        name: "Wallie",
        price: "1500",
        description: "this is just a description",
        image1: "image1.png",
        image2: "image2.png",
        categoryId: "999",
      };
      const response = await request(app)
        .post(url)
        .set("Authorization", "Bearer " + authToken)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(invalidCategoryIdError);
    });

    it("POST /products --> throws error if price field is invalid", async () => {
      const reqBody = {
        name: "Wallie",
        price: "some string",
        description: "this is just a description",
        image1: "image1.png",
        image2: "image2.png",
        categoryId: "2",
      };
      const response = await request(app)
        .post(url)
        .set("Authorization", "Bearer " + authToken)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(invalidPriceError);
    });

    it("POST /products --> throws error if stock field is invalid", async () => {
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
        .set("Authorization", "Bearer " + authToken)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(invalidStockError);

      const reqBody2 = { ...reqBody, stock: "23.22" };
      const response2 = await request(app)
        .post(url)
        .set("Authorization", "Bearer " + authToken)
        .send(reqBody2)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response2.body.success).toBe(false);
      expect(response2.body.error).toEqual(invalidStockError);
    });
  });

  describe("Update Product", () => {
    const reqBody = {
      name: "updated category",
      price: "100",
      discountPercent: "5",
      description: "this is updated description",
      detail: "this is updated detail",
      categoryId: "2",
      image1: "image1.png",
      image2: "image2.png",
      stock: "20",
    };

    it("PUT /products/:id --> should update a product", async () => {
      const response = await request(app)
        .put(`${url}/3`)
        .set("Authorization", "Bearer " + authToken)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual({
        ...reqBody,
        id: 3,
        discountPercent: 5,
        stock: 20,
        categoryId: 2,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });

    it("PUT /products/:id --> 404 if product not found", async () => {
      const response = await request(app)
        .put(`${url}/9999`)
        .set("Authorization", "Bearer " + authToken)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual({
        status: 404,
        type: errorTypes.notFound,
        message: "record to update not found.",
      });
    });

    it("PUT /products/:id --> price should be positive float", async () => {
      const response = await request(app)
        .put(`${url}/3`)
        .set("Authorization", "Bearer " + authToken)
        .send({ ...reqBody, price: "some string" })
        .expect("Content-Type", /json/)
        .expect(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(invalidPriceError);

      const response2 = await request(app)
        .put(`${url}/3`)
        .set("Authorization", "Bearer " + authToken)
        .send({ ...reqBody, price: "-100" })
        .expect("Content-Type", /json/)
        .expect(400);
      expect(response2.body.success).toBe(false);
      expect(response2.body.error).toEqual(invalidPriceError);
    });

    it("PUT /products/:id --> stock should be positive integer", async () => {
      const response = await request(app)
        .put(`${url}/3`)
        .set("Authorization", "Bearer " + authToken)
        .send({ ...reqBody, stock: "some string" })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(invalidStockError);

      const response2 = await request(app)
        .put(`${url}/3`)
        .set("Authorization", "Bearer " + authToken)
        .send({ ...reqBody, stock: "-100" })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response2.body.success).toBe(false);
      expect(response2.body.error).toEqual(invalidStockError);
    });

    it("PUT /products/:id --> category id should be existing category", async () => {
      const response = await request(app)
        .put(`${url}/3`)
        .set("Authorization", "Bearer " + authToken)
        .send({ ...reqBody, categoryId: "999" })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toEqual(invalidCategoryIdError);
    });
  });

  describe("Delete Product", () => {
    it("DELETE /products/:id --> should delete a product", async () => {
      const latestProduct = await prisma.product.findFirst({
        select: {
          id: true,
        },
        orderBy: {
          id: "desc",
        },
      });
      const response = await request(app)
        .delete(`${url}/${latestProduct!.id}`)
        .set("Authorization", "Bearer " + authToken)
        .expect(204);

      expect(response.status).toBe(204);
    });

    it("DELETE /products/:id --> should throw 404 if not found", async () => {
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

/* ========================= Errors ============================ */
const invalidStockError = {
  status: 400,
  type: errorTypes.invalidArgument,
  message: "invalid stock field",
  detail: [
    {
      code: "invalidStock",
      message: `stock field must only be valid integer`,
    },
  ],
};

const invalidPriceError = {
  status: 400,
  type: errorTypes.invalidArgument,
  message: "invalid price field",
  detail: [
    {
      code: "invalidPrice",
      message: `price field must only be valid number`,
    },
  ],
};

const invalidCategoryIdError = {
  status: 400,
  type: errorTypes.invalidArgument,
  message: "invalid category id",
  detail: [
    {
      code: "invalidCategory",
      message: `there is no category with id 999`,
    },
  ],
};
