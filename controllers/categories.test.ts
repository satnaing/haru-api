import app from "../app";
import request from "supertest";

describe("Categories", () => {
  it("testing", async () => {
    const response = await request(app)
      .get("/api/v1/categories")
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
});
