module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-sorted"],
  // setupFilesAfterEnv: ["<rootDir>/prisma/singleton.ts"],
};
