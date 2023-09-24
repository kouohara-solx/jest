import { JSDOM, DOMWindow } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

describe("simple ui test", () => {
  let document: Document;
  let window: DOMWindow;

  beforeEach(() => {
    window = new JSDOM(html, { runScripts: "dangerously" }).window;
    document = window.document;
  });

  it("doesnt show a message at the initial state", () => {
    const message = document.querySelector("#message > p");
    expect(message).toBeNull();
  });

  it("shows a message when the button is clicked", () => {
    const button = document.querySelector("#showMessage");
    const click = new window.Event("click");
    button?.dispatchEvent(click);
    const message = document.querySelector("#message > p");
    expect(message?.textContent).toBe("You Passed!!!");
  });

  it("show only one message when the button is clicked twice", () => {
    const button = document.querySelector("#showMessage");
    const click = new window.Event("click");
    button?.dispatchEvent(click);
    button?.dispatchEvent(click);
    const message = document.querySelectorAll("#message > p");
    expect(message?.length).toBe(1);
    expect(message[0]?.textContent).toBe("You Passed!!!");
  });
});
