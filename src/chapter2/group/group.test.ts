describe("group", () => {
  test("test1", () => {
    expect(true).toBe(true);
  });
  test("test2", () => {
    expect(true).toBe(true);
  });
  test("test3", () => {
    expect(true).toBe(true);
  });
  describe("group2", () => {
    test("test4", () => {
      expect(true).toBe(true);
    });
    test("test5", () => {
      expect(true).toBe(true);
    });
    test("test6", () => {
      expect(true).toBe(true);
    });
  });
});

describe("before/after timing", () => {
  beforeAll(() => console.log("1 - beforeAll"));
  afterAll(() => console.log("1 - afterAll"));
  beforeEach(() => console.log("1 - beforeEach"));
  afterEach(() => console.log("1 - afterEach"));
  test("test1", () => console.log("test1"));
  describe("second / nested block", () => {
    beforeAll(() => console.log("2 - beforeAll"));
    afterAll(() => console.log("2 - afterAll"));
    beforeEach(() => console.log("2 - beforeEach"));
    afterEach(() => console.log("2 - afterEach"));
    test("test2-1", () => console.log("test2-1"));
    test("test2-2", () => console.log("test2-2"));
  });
});
