import React from "react";
import { render, screen } from "@testing-library/react";
import MyButton from "./button";

test("renders Button component", () => {
  render(<MyButton label="button" onClick={() => { }} />);
  const linkElement = screen.getByText("button");
  expect(linkElement).toBeInTheDocument();
});
