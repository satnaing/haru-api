import request from "supertest";
import app from "../app";
import prisma from "../prisma/client";
import { errorTypes } from "../utils/errorObject";

const url = "/api/v1/admins";

type AdminType = {
  username: string;
  email: string;
  password: string;
  role?: "SUPERADMIN" | "ADMIN" | "MOERATOR";
};

const testAdmin: AdminType = {
  username: "testadmin",
  email: "testadmin5@gmail.com",
  password: "testadminpassword",
};

const createAdmin = (usr: AdminType) => {
  return request(app).post(url).send(usr);
};

describe("Admins", () => {
  it("POST /admins --> should create an admin", async () => {
    const response = await createAdmin(testAdmin)
      .expect("Content-Type", /json/)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual(expect.objectContaining(testAdmin));

    // delete admin after register and test
    const deleteAdmin = await prisma.admin.delete({
      where: { email: testAdmin.email },
    });
    expect(deleteAdmin).toBeDefined();
  });

  it("POST /admins --> should throw error if email already exists", async () => {
    await createAdmin({ ...testAdmin, email: "todelete@gmail.com" });
    const response = await request(app)
      .post(url)
      .send({ ...testAdmin, email: "todelete@gmail.com" })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.error).toEqual({
      status: 400,
      type: "alreadyExists",
      message: "email already exists",
    });
  });

  it("POST /admins --> throws error if required field is missing", async () => {
    const response = await request(app)
      .post(url)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.error).toEqual({
      status: 400,
      type: "invalidArgument",
      message: "invalid one or more argument(s)",
      detail: [
        {
          code: "missingUsername",
          message: "username field is missing",
        },
        {
          code: "missingEmail",
          message: "email field is missing",
        },
        {
          code: "missingPassword",
          message: "password field is missing",
        },
      ],
    });
  });

  it("POST /admins --> should validate email", async () => {
    const response = await request(app)
      .post(url)
      .send({ ...testAdmin, email: "thisisnotavalidemailaddress" })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.error).toEqual({
      status: 400,
      type: errorTypes.invalidArgument,
      message: "email is not valid",
    });
  });

  it("POST /admins --> should throw error if role is not superadmin, admin, or mod", async () => {
    const response = await request(app)
      .post(url)
      .send({ ...testAdmin, role: "DUMMY" })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.error).toEqual({
      status: 400,
      type: errorTypes.invalidArgument,
      message: "role type is not valid",
      detail: [
        {
          code: "invalidRole",
          message: "role must be one of 'SUPERADMIN', 'ADMIN', and 'MODERATOR'",
        },
      ],
    });
  });
});
