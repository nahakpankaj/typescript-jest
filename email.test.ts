import { isValidEmail, isValidPassword } from "../index.ts";

// For Email
describe("isValidEmail", () => {
  const testCases: {
    input: string | null | undefined;
    expected: boolean;
  }[] = [
    { input: "pankaj@gmail.com", expected: true },
    // { input: "pankaj@gmail.com", expected: true },
    { input: "email#gmail.com", expected: false },
    { input: "", expected: false },
    { input: null, expected: false },
    { input: undefined, expected: false },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`email address: ${input}`, () => {
      const result = isValidEmail(input as string);
      expect(result).toBe(expected);
    });
  });
});

//For Password
describe("isValidPassword", () => {
  const passwordTestCases: {
    input: string | null | undefined;
    expected: boolean;
  }[] = [
    { input: "Password@1", expected: true },
    // { input: "ss", expected: true },
    { input: "ss", expected: false },
    { input: "", expected: false },
    { input: null, expected: false },
    { input: undefined, expected: false },
  ];

  passwordTestCases.forEach(({ input, expected }) => {
    test(`password: ${input}`, () => {
      const password = isValidPassword(input as string);
      expect(password).toBe(expected);
    });
  });
});
