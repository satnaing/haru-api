import request from "supertest";
import app from "../app";

const url = "/api/v1/admins";

const testAdmin = {
  username: "testadmin",
  email: "testadmin@gmail.com",
  password: "testadminpassword",
};
// id          Int       @id @default(autoincrement())
// username    String    @db.VarChar(50)
// email       String    @db.VarChar(50) @unique
// password    String    @db.VarChar(255)
// role        Role      @default(ADMIN)
// createdAt   DateTime  @default(now()) @map("created_at")
// updatedAt   DateTime? @map("updated_at")

describe("Admins", () => {
  it("POST /admins --> should create an admin", async () => {
    const response = await request(app)
      .post(url)
      .send(testAdmin)
      .expect("Content-Type", /json/)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual(
      expect.objectContaining({
        ...testAdmin,
        id: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: null,
      })
    );
  });
});
