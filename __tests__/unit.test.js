// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

/* isPhoneNumber */

// true tests
test("checks if phone number is valid", () => {
  expect(isPhoneNumber("619-882-3913")).toBe(true);
});

test("checks if phone number is valid", () => {
  expect(isPhoneNumber("619-180-2929")).toBe(true);
});

// false tests
test("checks if phone number is not valid", () => {
  expect(isPhoneNumber("6198823913")).toBe(false);
});

test("checks if phone number is not valid", () => {
  expect(isPhoneNumber(619-180-2929)).toBe(false);
});


/* isEmail */

// true tests
test("checks if email is valid", () => {
  expect(isEmail("aliani@ucsd.edu")).toBe(true);
});

test("checks if email is valid", () => {
  expect(isEmail("aliani@gmail.com")).toBe(true);
});

// false tests
test("checks if email is not valid", () => {
  expect(isEmail("aliani.com")).toBe(false);
});

test("checks if email is not valid", () => {
  expect(isEmail("aliani@yahoo")).toBe(false);
});

/* isStrongPassword */

// true tests
test("checks if password is strong", () => {
  expect(isStrongPassword("profPowell")).toBe(true);
});

test("checks if password is strong", () => {
  expect(isStrongPassword("aliani")).toBe(true);
});

// false tests
test("checks if password is not strong", () => {
  expect(isStrongPassword("1aliani")).toBe(false);
});

test("checks if password is not strong", () => {
  expect(isStrongPassword("aliani@")).toBe(false);
});

/* isDate */

// true tests
test("checks if date is valid", () => {
  expect(isDate("04/29/2018")).toBe(true);
});

test("checks if date is valid", () => {
  expect(isDate("1/1/2011")).toBe(true);
});

// false tests
test("checks if date is not valid", () => {
  expect(isDate("07/20/20")).toBe(false);
});

test("checks if date is not valid", () => {
  expect(isDate("1/2011")).toBe(false);
});

/* isHexColor */

// true tests
test("checks if color is hex", () => {
  expect(isHexColor("#F73")).toBe(true);
});

test("checks if color is hex", () => {
  expect(isHexColor("#F70213")).toBe(true);
});

// false tests
test("checks if color is not hex", () => {
  expect(isHexColor("#F7213")).toBe(false);
});

test("checks if color is not hex", () => {
  expect(isHexColor("#F723")).toBe(false);
});