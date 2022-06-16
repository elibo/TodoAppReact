import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders Login page", () => {
  render(<Login />);
  const linkElement = screen.getByText("login");
  expect(linkElement).toBeInTheDocument();
});
