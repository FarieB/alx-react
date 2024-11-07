import { getFullYear, getFooterCopy, getLatestNotification } from './utils'; // Import the necessary functions from utils.js

test("returns current year", () => {
  const mockDate = new Date(2022, 0, 1); // Mocking the current date to 2022 for the test
  jest.spyOn(global, 'Date').mockImplementation(() => mockDate); // Mock the Date constructor to return the mock date

  expect(getFullYear()).toBe(2022); // Test the function to return 2022
  global.Date.mockRestore(); // Restore the original Date constructor
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School"); // Test for true value
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard"); // Test for false value
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD"); // Test notification message
});
