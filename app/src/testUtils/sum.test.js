import { sum } from "./sum";

describe("Sum", () => {
  it("error for invalid no of arguments", () => {
    expect(sum(5)).toBe(NaN);
  });

  it("5 + 5 = 10", () => {
    expect(sum(5, 5)).toBe(10);
  });

  it("5 - 2 = 3", () => {
    expect(sum(5, -2)).toBe(3);
  });
});
