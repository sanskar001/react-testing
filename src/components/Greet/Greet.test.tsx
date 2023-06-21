import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// // test(name, callback function that takes expectation, timeout);

// test("greet render correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });

// --------------------------------------------------------------------

// Test Driven Development

/*
- Greet should render the text hello and if a name is passsed into the component.
- It should render hello followed by the name.
*/

// test("Greet render correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

// test("Greet render with name correctly", () => {
//   render(<Greet name="James" />);
//   const textElement = screen.getByText("Hello James");
//   expect(textElement).toBeInTheDocument();
// });

// ---------------------------------------------------------------------------

// Global Filter Test using "only" and "skip"

// test("Greet render correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

// test.only("Greet render with name correctly", () => {
//   render(<Greet name="James" />);
//   const textElement = screen.getByText("Hello James");
//   expect(textElement).toBeInTheDocument();
// });

// ---------------------------------------------------------------------------

// Grouping tests with "describe", you can also using "only/skip" and you can also do nested grouping.

describe("Greet", () => {
  test("Greet render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test.only("Greet render with name correctly", () => {
    render(<Greet name="James" />);
    const textElement = screen.getByText("Hello James");
    expect(textElement).toBeInTheDocument();
  });
});
