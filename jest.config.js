module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-sorted"],
  // testTimeout: 20000,
  // setupFilesAfterEnv: ["<rootDir>/prisma/singleton.ts"],
};
