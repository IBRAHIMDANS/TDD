import { reverseString } from "./reverse-string";

describe("For Test my function Reverse String", () => {
  test("test string ", () => {
      expect(reverseString("Bonjour")).toEqual("ruojnoB");
  });
  test("test number", () => {
      expect(reverseString("56")).toEqual("65");
  });
  test("test number", () => {
      expect(()=>{
          reverseString(56)}).toThrow(Error)
  });
  test("test boolean", () => {
      expect(()=>{
          reverseString(true)}).toThrow(Error)
  });
});
