import computePrice from "../src/compute-price";

describe("Orders ", () => {
  test("test multiple order return 84  ", () => {
    expect(
      computePrice([
        { price: 1, quantity: 2 },
        { price: 2, quantity: 3 },
        { price: 6, quantity: 5 },
        { price: 6, quantity: 5 },
        { price: 2, quantity: 8 }
      ])
    ).toEqual(84);
  });
  test("test order (1*2)+(3*4) =14  ", () => {
    expect(
      computePrice([{ price: 1, quantity: 2 }, { price: 3, quantity: 4 }])
    ).toEqual(14);
  });
  test("test order (5*6)+(7*8)=86   ", () => {
    expect(
      computePrice([{ price: 5, quantity: 6 }, { price: 7, quantity: 8 }])
    ).toEqual(86);
  });
  test("test order (1*1)+(1*1)=1   ", () => {
    expect(
      computePrice([{ price: 1, quantity: 1 }, { price: 1, quantity: 1 }])
    ).toEqual(2);
  });
  describe("Error Management ", () => {
    test("test order length supperior as 5 ", () => {
      expect(() =>
        computePrice([
          { price: 1, quantity: 2 },
          { price: 2, quantity: 3 },
          { price: 6, quantity: 5 },
          { price: 6, quantity: 5 },
          { price: 2, quantity: 8 },
          { price: 2, quantity: 8 },
          { price: 2, quantity: 8 }
        ])
      ).toThrow(new Error("Too many orders!!!@@"));
    });

    test("test order length supperior as 5 ", () => {
      expect(() =>
        computePrice([
          { price: 1, quantity: 2 },
          { price: 2, quantity: 3 },
          { price: 6, quantity: 5 },
          { price: 6, quantity: 5 },
          { price: 2, quantity: 8 },
          { price: 2, quantity: 8 },
          { price: 2, quantity: 8 },
          { price: 2, quantity: 8 },
          { price: 2, quantity: 8 },
          { price: 2, quantity: 8 }
        ])
      ).toThrow(new Error("Too many orders!!!@@"));
    });
    test("orders type is incorrect ", () => {
      expect(() => computePrice({ price: 54, quantity: 2 })).toThrow(
        new Error("Incorrect type")
      );
    });
    test("orders type is incorrect ", () => {
      expect(() => computePrice({ price: 54, quantity: 2 })).toThrow(
        new Error("Incorrect type")
      );
    });
    test("test order quantity or price are negative ", () => {
      expect(() =>
        computePrice([
          { price: -1, quantity: 2 },
          { price: 2, quantity: 3 },
          { price: 6, quantity: 5 },
          { price: 6, quantity: 5 }
        ])
      ).toThrow(new Error("Negative values are forbidden"));
    });
    test("test order quantity or price are negative ", () => {
      expect(() =>
        computePrice([
          { price: 1, quantity: 2 },
          { price: 2, quantity: 3 },
          { price: 6, quantity: -5 },
          { price: 6, quantity: 5 }
        ])
      ).toThrow(new Error("Negative values are forbidden"));
    });
    test("Zeo values ", () => {
      expect(() =>
        computePrice([
          { price: 0, quantity: 2 },
          { price: 2, quantity: 10 },
          { price: 6, quantity: 5 },
          { price: 6, quantity: 5 }
        ])
      ).toThrow(new Error("Zero values are forbidden."));
    });
    test("Zeo values ", () => {
      expect(() =>
        computePrice([
          { price: 10, quantity: 2 },
          { price: 2, quantity: 0 },
          { price: 6, quantity: 5 },
          { price: 6, quantity: 5 }
        ])
      ).toThrow(new Error("Zero values are forbidden."));
    });

    test("undefined value  ", () => {
      expect(() =>
        computePrice([
          { price: undefined, quantity: 2 },
          { price: 2, quantity: 3 }
        ])
      ).toThrow(new Error("Invalid order"));
    });
    test("undefined value  ", () => {
      expect(() =>
        computePrice([
          { price: 2, quantity: 2 },
          { price: 2, quantity: undefined }
        ])
      ).toThrow(new Error("Invalid order"));
    });
    test("Array empty ", () => {
      expect(() => computePrice([])).toThrow(
        new Error("Please give a array not empty")
      );
    });
    test("Array empty ", () => {
      expect(() => computePrice([])).toThrow(
        new Error("Please give a array not empty")
      );
    });
  });
});
