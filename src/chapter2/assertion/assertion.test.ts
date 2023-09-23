test("testを利用してテストケースを作成する", () => {
  const result = true;
  const expected = true;
  expect(result).toBe(expected);
});

it("itを利用してテストケースを作成する", () => {
  const result = true;
  const expected = true;
  expect(result).toBe(expected);
});

const number = 0;
const string = "文字列";
const boolean = true;

test("eveluates as equal for all the same primitive values when using the toBe function", () => {
  expect(number).toBe(0);
  expect(string).toBe("文字列");
  expect(boolean).toBe(true);
});

test("eveluates as equal for all the same primitive values when using the toEqual function", () => {
  expect(number).toEqual(0);
  expect(string).toEqual("文字列");
  expect(boolean).toEqual(true);
});

test("eveluates as equal for all the same primitive values when using the toStrictEqual function", () => {
  expect(number).toStrictEqual(0);
  expect(string).toStrictEqual("文字列");
  expect(boolean).toStrictEqual(true);
});

type CanType = {
  flavor: string;
  ounces: number;
};

const can1: CanType = {
  flavor: "grapefruit",
  ounces: 12,
};

const can2: CanType = {
  flavor: "grapefruit",
  ounces: 12,
};

const can3: CanType = can2;

class Can {
  flavor: string;
  ounces: number;
  constructor({ flavor, ounces }: CanType) {
    this.flavor = flavor;
    this.ounces = ounces;
  }
}

const can4 = new Can({
  flavor: "grapefruit",
  ounces: 12,
});

test("can1 and can2 are not the exact same instance", () => {
  expect(can1).not.toBe(can2);
});

test("can2 and can3 are the exact same instance", () => {
  expect(can2).toBe(can3);
});

test("can1 and can2 have the same properties", () => {
  expect(can1).toEqual(can2);
});

test("can2 and can4 have the same properties", () => {
  expect(can2).toEqual(can4);
});

test("can2 and can4 are different class", () => {
  expect(can2).not.toStrictEqual(can4);
});

test("differeces between toEqual and toStrictEqual", () => {
  expect({ foo: NaN, bar: undefined }).toEqual({ foo: NaN });
  expect({ foo: NaN, bar: undefined }).not.toStrictEqual({ foo: NaN });
  expect([, undefined, 1]).toEqual([undefined, , 1]);
  expect([, undefined, 1]).not.toStrictEqual([undefined, , 1]);
});

test('"0" should be truthy', () => {
  expect("0").toBeTruthy();
});

test("0 should be falsy", () => {
  expect(0).toBeFalsy();
});
