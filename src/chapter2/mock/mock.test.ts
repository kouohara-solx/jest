describe("jest.fn()", () => {
  test("mock object specification", () => {
    const mockFunction = jest.fn();
    expect(mockFunction("foo", "bar")).toBe(undefined);
    expect(mockFunction).toHaveProperty("mock");
    expect(mockFunction.mock).toHaveProperty("calls");
    expect(mockFunction.mock.calls).toHaveLength(1);
    expect(mockFunction.mock.calls[0]).toEqual(["foo", "bar"]);
    expect(mockFunction.mock).toHaveProperty("results");
    expect(mockFunction.mock.results[0].value).toBe(undefined);
    expect(mockFunction.mock.results[0].type).toBe("return");
  });
});

test("return `Hello`", () => {
  const mockFunction = jest.fn(() => "Hello");
  expect(mockFunction()).toBe("Hello");
});

test("return `Hello` once then it returns `Good bye`", () => {
  const mockFunction = jest
    .fn()
    .mockImplementationOnce(() => "Hello")
    .mockImplementationOnce(() => "Good bye");
  expect(mockFunction()).toBe("Hello");
  expect(mockFunction()).toBe("Good bye");
  expect(mockFunction()).toBe(undefined);
});
