import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// test(name, callback function that takes expectation, timeout);

test("greet render correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
