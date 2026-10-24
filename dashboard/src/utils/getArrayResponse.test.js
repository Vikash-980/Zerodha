import getArrayResponse from "./getArrayResponse";

test("returns an array response", () => {
  const items = [{ name: "INFY" }];

  expect(getArrayResponse({ data: items }, "holdings")).toBe(items);
});

test("returns an array nested in a data envelope", () => {
  const items = [{ name: "INFY" }];

  expect(getArrayResponse({ data: { data: items } }, "holdings")).toBe(items);
});

test("rejects non-array API payloads", () => {
  expect(() => getArrayResponse({ data: { message: "Unauthorized" } }, "positions"))
    .toThrow("The positions API returned an invalid response");
});
