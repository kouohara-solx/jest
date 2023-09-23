const calculateSalesTax = (price: number) =>
  price > 0 ? Math.floor((price / 100) * 10) : 0;

describe("calculateSalesTax", () => {
  test("calculates the sales tax for a price equals to 100", () => {
    expect(calculateSalesTax(100)).toEqual(10);
  });

  test("calculates the sales tax for a price equals to 99", () => {
    expect(calculateSalesTax(99)).toEqual(9);
  });

  test("calculates the sales tax for a price equals to 1", () => {
    expect(calculateSalesTax(1)).toEqual(0);
  });

  test("calculates the sales tax for a price equals to 0.1", () => {
    expect(calculateSalesTax(0.1)).toEqual(0);
  });

  test("calculates the sales tax for a price equals to 0", () => {
    expect(calculateSalesTax(0)).toEqual(0);
  });

  test("calculates the sales tax for a price equals to -1", () => {
    expect(calculateSalesTax(-1)).toEqual(0);
  });
});

describe("calculateSalesTax with parameterized tests", () => {
  test.each([
    { price: 100, expected: 10 },
    { price: 99, expected: 9 },
    { price: 1, expected: 0 },
    { price: 0.1, expected: 0 },
    { price: 0, expected: 0 },
    { price: -1, expected: 0 },
  ])(
    "calculates the sales tax for a price equals to $price",
    ({ price, expected }) => {
      expect(calculateSalesTax(price)).toEqual(expected);
    }
  );
});
