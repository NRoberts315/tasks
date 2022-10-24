import { DogCare } from "./DogCare";

describe("Testing the validity of the password", () => {
    test("Testing if password is valid with 16 characters and no special characters or numbers in index 0", () => {
        const password = "q1!qqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(true);
    });
    test("Testing if password is invalid with less than 16 characters", () => {
        const password = "q1!";
        expect(DogCare(password)).toEqual(false);
    });
    test("Testing if password is invalid with more than 16 characters", () => {
        const password = "q1!qqqqqqqqqqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(false);
    });
    test("Testing if password is valid with only 1 special character", () => {
        const password = "q1!qqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(true);
    });
    test("Testing if password is valid with multiple special characters", () => {
        const password = "q1!!qqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(true);
    });
    test("Testing if password is invalid with 0 special characters", () => {
        const password = "q1qqqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(false);
    });
    test("Testing if password is valid with only 1 number", () => {
        const password = "q1!qqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(true);
    });
    test("Testing if password is valid with multiple numbers", () => {
        const password = "q1!1qqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(true);
    });
    test("Testing if password is invalid with 0 numbers", () => {
        const password = "q!qqqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(false);
    });
    test("Testing if password is valid with only 1 letter", () => {
        const password = "q1!1111111111111";
        expect(DogCare(password)).toEqual(true);
    });
    test("Testing if password is valid with multiple letters", () => {
        const password = "q1!qqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(true);
    });
    test("Testing if password is invalid with 0 letters", () => {
        const password = "11!1111111111111";
        expect(DogCare(password)).toEqual(false);
    });
    test("Testing if password is invalid with a special character in index 0", () => {
        const password = "!1qqqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(false);
    });
    test("Testing if password is invalid with a number in index 0", () => {
        const password = "1!qqqqqqqqqqqqqq";
        expect(DogCare(password)).toEqual(false);
    });
});
