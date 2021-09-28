import app from "../app";
import request from "supertest";
import "jest-sorted";
import { resource404Error } from "../utils/errorObject";

const url = "/api/v1/categories";

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

    it("GET /categories --> select name, desc", async () => {
      const response = await request(app)
        .get(url)
        .query({ select: "name,description" })
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body).toEqual({
        success: true,
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

    it("GET /categories/:id --> 404 if not found", async () => {
      const response = await request(app)
        .get(`${url}/4`)
        .expect("Content-Type", /json/)
        .expect(404);

      expect(response.body).toEqual({
        success: false,
        error: resource404Error,
      });
    });
  });
});
