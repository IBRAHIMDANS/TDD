import Compute from "./computer";

describe("All test for Computer", () => {
  describe("Management for error ", () => {
    test("sum 5+0=5", () => {
      expect(Compute.sum(5, 0)).toEqual(5);
    });
    test("sum 5+0=5", () => {
      expect(() => Compute.sum(5)).toThrow(
        new Error("Please sum take two number")
      );
    });
    test("give a string", () => {
      expect(() => Compute.sum("5", "6")).toThrow(
        new Error("number can be a number")
      );
    });
    test("give a string", () => {
      expect(() => Compute.sum([5, 0], [6, 0])).toThrow(
        new Error("number can be a number")
      );
    });
  });
});
