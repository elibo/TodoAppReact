import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MyInput from "./input";

let changeFn = jest.fn();

afterEach(() => {
  changeFn.mockClear();
})

test("renders Input component", () => {
  render(<MyInput placeholder="input" onChange={changeFn} value="" isPass={false} />);
  fireEvent.change(screen.getByPlaceholderText("input"), { target: { value: 'a' } });
  expect(changeFn).toBeCalled();
});

test("renders Input component with pass", () => {
  render(<MyInput placeholder="input" onChange={changeFn} value="" isPass={true} />);
  fireEvent.change(screen.getByPlaceholderText("input"), { target: { value: 'a' } });
  expect(changeFn).toBeCalled();
});
