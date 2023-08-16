import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("validating contact us details", () => {
  test("Validate ContactUs page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Validate Button", () => {
    render(<Contact />);
    // const button = screen.getByText("Submit");
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
  });
});

test("Validate Placeholder", () => {
  render(<Contact />);
  const inputPLname = screen.getByPlaceholderText("name");
  const inputPLmessage = screen.getByPlaceholderText("message");
  expect(inputPLname).toBeInTheDocument();
  expect(inputPLmessage).toBeInTheDocument();

  const allinputs = screen.getAllByRole("textbox");
  // console.log(allinputs.length);
  expect(allinputs.length).toBe(2);
});
