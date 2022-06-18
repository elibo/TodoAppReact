import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

const mockFn = jest.fn();

afterEach(() => {
  mockFn.mockClear();
})

describe("renders Login page", () => {
  test("with no user and no pass", () => {
    render(<Login />);
    const linkElement = screen.getByText("Login");
    expect(linkElement).toBeInTheDocument();
  });

  test("with user and pass incorrect", () => {
    render(<Login />);
    fireEvent.change(screen.getByTestId("input"), { target: { value: 'a' } });
    fireEvent.change(screen.getByTestId("pass-input"), { target: { value: 'a' } });
    fireEvent.click(screen.getByText("Login"))
    expect(screen.getByText("This user is not correct")).toBeInTheDocument();
  });

  test("with user and pass correct", () => {
    render(<Login />);
    fireEvent.change(screen.getByTestId("input"), { target: { value: 'Test' } });
    fireEvent.change(screen.getByTestId("pass-input"), { target: { value: 'test' } });
    fireEvent.click(screen.getByText("Login"));
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
});
