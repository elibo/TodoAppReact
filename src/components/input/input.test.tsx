import React from "react";
import { render, screen } from "@testing-library/react";
import MyInput from "./input";

test("renders Input component", () => {
  render(<MyInput placeholder="input" onChange={() => {}} />);
  const linkElement = screen.getByPlaceholderText("input");
  expect(linkElement).toBeInTheDocument();
});
