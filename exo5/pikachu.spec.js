import { pikachu } from "./pikachu";

describe(" All test for pikachu", () => {
  describe("tout les nombres divisible par 3", () => {
    test("Divisible par 3 ", () => {
      expect(pikachu(6)).toEqual("Pika");
    });
    test("Divisible par 3 ", () => {
      expect(pikachu(9)).toEqual("Pika");
    });
    test("Divisible par 3 ", () => {
      expect(pikachu(12)).toEqual("Pika");
    });
  });
  describe("tout les nombres divisible par 5 ", () => {
    test("Divisible par 5 ", () => {
      expect(pikachu(5)).toEqual("Chu");
    });
    test("Divisible par 5 ", () => {
      expect(pikachu(35)).toEqual("Chu");
    });
    test("Divisible par 5 ", () => {
      expect(pikachu(20)).toEqual("Chu");
    });
  });
  describe("divisible par 3 et 5", () => {
    test("Divisible par 5 et par 3 ", () => {
      expect(pikachu(0)).toEqual("PikaChu");
    });
    test("Divisible par 5 et par 3 ", () => {
      expect(pikachu(15)).toEqual("PikaChu");
    });
    test("Divisible par 5 et par 3 ", () => {
      expect(pikachu(30)).toEqual("PikaChu");
    });
  });
  describe("Gestio d erreur ", () => {
    test("Divisible par 3 ", () => {
      expect(() => pikachu("6")).toThrow(
        new Error("Please number must be a number")
      );
    });

    test("number is undefined ", () => {
      expect(() => pikachu()).toThrow(
        new Error("Please number can not undefined")
      );
    });
  });
});
