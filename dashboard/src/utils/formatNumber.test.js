import { formatNumber, toFiniteNumber } from "./formatNumber";

test("formats valid numeric API values", () => {
  expect(formatNumber(12.5)).toBe("12.50");
  expect(formatNumber("12.5")).toBe("12.50");
});

test("handles missing or invalid numeric API values", () => {
  expect(formatNumber(null)).toBe("--");
  expect(formatNumber(undefined)).toBe("--");
  expect(formatNumber("not a number")).toBe("--");
  expect(toFiniteNumber(undefined)).toBeNull();
});
