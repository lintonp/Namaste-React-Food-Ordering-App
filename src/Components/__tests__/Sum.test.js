import { Sum } from "../Sum";

describe("Validate sum", () => {
  test("Sum of 3+4 should be 7", () => {
    expect(Sum(3, 4)).toBe(7);
  });
  test("Sum of -3 and 4 should be 1", () => {
    expect(Sum(-3, 4)).toBe(1);
  });
  it("Sum of 2 negatives", () => {
    expect(Sum(-1, -2)).toBe(-3);
  });
});
