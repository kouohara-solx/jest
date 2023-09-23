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
  //   expect([, undefined, 1]).toEqual([undefined, , 1]);
  //   expect([, undefined, 1]).not.toStrictEqual([undefined, , 1]);
});

test('"0" should be truthy', () => {
  expect("0").toBeTruthy();
});

test("0 should be falsy", () => {
  expect(0).toBeFalsy();
});

test("should be null", () => {
  expect(null).toBeNull();
  expect(null).toBe(null);
});

test("should be undefined", () => {
  expect(undefined).toBeUndefined();
  expect(undefined).toBe(undefined);
});

test("should be null or undefined", () => {
  let a;
  expect(a == null).toBe(true);
  expect(a == undefined).toBe(true);
});

const hoge = () => ({ hoge: "hogehoge", number: 0 });
test("hoge return anything", () => {
  expect(hoge()).toEqual(expect.anything());
  expect(hoge()).toEqual({ hoge: "hogehoge", number: expect.anything() });
  expect(hoge()).toEqual({ hoge: "hogehoge", number: expect.any(Number) });
});

test("0.1 + 0.2 should be 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test("0.301 and 0.3 are different when numDigits is 3", () => {
  expect(0.3 + 0.001).not.toBeCloseTo(0.3, 3);
});

test('0.1 + 0.2 should greater than "0.3"', () => {
  expect(0.1 + 0.2).toBeGreaterThan(0.3);
  expect(0.1 + 0.2 > 0.3).toBe(true);
});

test("0.1 + 0.2 should be greater than 0.3 or 0.1 + 0.2 should equal to 0.30000000000000004", () => {
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3);
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.30000000000000004);
  expect(0.1 + 0.2 >= 0.3).toBe(true);
  expect(0.1 + 0.2 >= 0.30000000000000004).toBe(true);
});

const log1 =
  '10.0.0.3 -- [30/Jan/2023:12:20:12 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';
const log2 =
  '10.0.0.11 -- [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';
const log3 =
  '10.0.0.99 -- [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';

test("contains 10.0.0.3 IP address", () => {
  expect(log1).toEqual(expect.stringContaining("10.0.0.3"));
});

test("contain IP address between 10.0.0.0 and 10.0.0.99", () => {
  const expected = /^10.0.0.([1-9]?[0-9])/;

  // expcet.stringMatching
  expect(log1).toEqual(expect.stringMatching(expected));
  expect(log2).toEqual(expect.stringMatching(expected));
  expect(log3).toEqual(expect.stringMatching(expected));

  // toMatch
  expect(log1).toMatch(expected);
  expect(log2).toMatch(expected);
  expect(log3).toMatch(expected);

  // toBe
  const regex = new RegExp(expected);
  expect(regex.test(log1)).toBe(true);
  expect(regex.test(log2)).toBe(true);
  expect(regex.test(log3)).toBe(true);
});

const fruits = ["apple", "lemon", "orange"];

test("fruits contains apple", () => {
  expect(fruits).toContain("apple");
});

test("fruits conatains apple and orange", () => {
  expect(fruits).toEqual(expect.arrayContaining(["apple", "orange"]));
});

const items = [
  { name: "apple", price: 100 },
  { name: "lemon", price: 200 },
  { name: "orange", price: 300 },
];

test("items contains apple", () => {
  expect(items).toContainEqual({ name: "apple", price: 100 });
});

test("items contains apple and orange", () => {
  expect(items).toEqual(
    expect.arrayContaining([
      { name: "apple", price: 100 },
      { name: "orange", price: 300 },
    ])
  );
});

const ciBuild = {
  number: 1,
  duration: 12000,
  state: "SUCCESS",
  triggerParamaters: {
    is_scheduled: true,
  },
  type: "scheduled_pipeline",
  actor: {
    login: "user1",
  },
};

test("build state should be SUCCESS", () => {
  expect(ciBuild).toHaveProperty("state", "SUCCESS");
});

test("actor should be user1", () => {
  expect(ciBuild).toHaveProperty("actor.login", "user1");
});

test("triggered by the scheduled pipeline", () => {
  expect(ciBuild).toEqual(
    expect.objectContaining({
      triggerParamaters: expect.objectContaining({ is_scheduled: true }),
      type: "scheduled_pipeline",
    })
  );
});

const fetchDataWithPromiseResolve = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, "lemon"));

test("return lemon", () => {
  return expect(fetchDataWithPromiseResolve()).resolves.toBe("lemon");
});

test("return lemon with async/await", async () => {
  await expect(fetchDataWithPromiseResolve()).resolves.toBe("lemon");
});

const fetchDataWithPromiseReject = () =>
  new Promise((_, reject) =>
    setTimeout(reject, 1000, new Error("lemon does not exist"))
  );

test("return lemon does not exist", () => {
  return expect(fetchDataWithPromiseReject()).rejects.toThrow(
    "lemon does not exist"
  );
});

test("return lemon does not exist with async/await", async () => {
  await expect(fetchDataWithPromiseReject()).rejects.toThrow(
    "lemon does not exist"
  );
});
