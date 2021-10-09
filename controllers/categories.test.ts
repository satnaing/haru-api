import app from "../app";
import express from "express";
import request from "supertest";
import "jest-sorted";
import { errorTypes, resource404Error } from "../utils/errorObject";

const url = "/api/v1/categories";

const testCategory = {
  id: 778,
  name: "sneakers",
  description: "sapien non mi integer ac neque duis bibendum morbi non",
  thumbnailImage: "http://dummyimage.com/720x400.png/cc0000/ffffff",
};

let authToken = "";

const adminLogin = async () => {
  const response = await request(app)
    .post(`/api/v1/admins/login`)
    .send({ email: "superadmin@gmail.com", password: "superadmin" });
  authToken = response.body.token;
};

beforeAll(() => adminLogin());

describe("Categories Controller", () => {
  describe("Get Categories", () => {
    it("GET /categories --> return categories", async () => {
      const response = await request(app)
        .get(url)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.data).toBeDefined;
      expect(response.body).toEqual({
        success: true,
        count: expect.any(Number),
        data: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            thumbnailImage: expect.any(String),
          }),
        ]),
      });
    });

    it("GET /categories --> select name, description", async () => {
      const response = await request(app)
        .get(url)
        .query({ select: "name,description" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        count: expect.any(Number),
        data: expect.arrayContaining([
          {
            name: expect.any(String),
            description: expect.any(String),
          },
        ]),
      });
    });

    it("GET /categories --> order_by name.desc", async () => {
      const response = await request(app)
        .get(url)
        .query({ order_by: "name.desc" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.data).toBeSortedBy("name", { descending: true });
    });

    it("GET /categories/:id --> return specific category", async () => {
      const response = await request(app)
        .get(`${url}/3`)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        data: expect.objectContaining({
          id: 3,
        }),
      });
    });

    it("GET /categories/:id --> select name", async () => {
      const response = await request(app)
        .get(`${url}/3`)
        .query({ select: "name" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        data: {
          name: expect.any(String),
        },
      });
    });

    it("GET /categories/:id --> 404 if not found", async () => {
      const response = await request(app)
        .get(`${url}/99`)
        .expect("Content-Type", /json/)
        .expect(404);

      expect(response.body).toEqual({
        success: false,
        error: resource404Error("category"),
      });
    });
  });

  describe("Create Category", () => {
    it("POST /categories --> create a new category", async () => {
      const response = await request(app)
        .post(url)
        .set("Authorization", "Bearer " + authToken)
        .send(testCategory)
        .expect("Content-Type", /json/)
        .expect(201);

      const uriRegEx = /^([^:]*):([^:]*):(.*)\/categories\/\d*$/;

      expect(response.body.location).toMatch(uriRegEx);
      expect(response.body).toEqual(
        expect.objectContaining({
          success: true,
          data: {
            ...testCategory,
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: null,
          },
        })
      );
    });

    it("POST /categories --> return error if name already exists", async () => {
      const testCategory = {
        name: "men",
        description: "sapien non mi integer",
      };
      const response = await request(app)
        .post(url)
        .send(testCategory)
        .set("Authorization", "Bearer " + authToken)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toEqual({
        success: false,
        error: {
          status: 400,
          type: errorTypes.alreadyExists,
          message: "name already exists",
        },
      });
    });

    it("POST /categories --> return error if name is not sent in body", async () => {
      const response = await request(app)
        .post(url)
        .set("Authorization", "Bearer " + authToken)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toEqual({
        success: false,
        error: {
          status: 400,
          type: errorTypes.invalidArgument,
          message: "invalid one or more argument(s)",
          detail: [
            {
              code: "missingName",
              message: "name field is missing",
            },
          ],
        },
      });
    });

    // Validation Body Fields

    // Auth Access
  });

  describe("Update Category", () => {
    const reqBody = {
      name: "shoes",
      description: "Shoes and Sneakers",
      thumbnailImage: "somedummyimage.png",
    };

    it("PUT /categories/:id --> should update category", async () => {
      const response = await request(app)
        .put(`${url}/${testCategory.id}`)
        .set("Authorization", "Bearer " + authToken)
        .send(reqBody)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual({
        ...reqBody,
        id: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });

    it("PUT /categories/:id --> 404 if category not found", async () => {
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
  });

  describe("Delete Category", () => {
    it("DELETE /categories/:id --> delete a specific category", async () => {
      const response = await request(app)
        .delete(`${url}/${testCategory.id}`)
        .set("Authorization", "Bearer " + authToken)
        .expect(204);
    });

    it("DELETE /categories/:id --> return 404 error if category not found", async () => {
      const response = await request(app)
        .delete(`${url}/${testCategory.id}`)
        .set("Authorization", "Bearer " + authToken)
        .expect("Content-Type", /json/)
        .expect(404);

      expect(response.body).toEqual({
        success: false,
        error: {
          status: 404,
          type: errorTypes.notFound,
          message: "record to delete does not exist.",
        },
      });
    });

    // it("DELETE /categories/:id --> return auth error if not admin", async() => {});
  });
});
