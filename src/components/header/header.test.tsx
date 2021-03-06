import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

test("renders Header component", () => {
  render(<Header />);
  const linkElement = screen.getByText("Exit");
  expect(linkElement).toBeInTheDocument();
});
