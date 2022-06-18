import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Main from "./Main";


let mockFn = jest.fn();
const setStateMock = jest.fn();
const useStateMock: any = (useState: any) => [useState, setStateMock];

afterEach(() => {
  mockFn.mockClear();
  setStateMock.mockClear();
});


test("renders Main page", () => {
  render(<Main />);
  const linkElement = screen.getByTestId('main-page');
  expect(linkElement).toBeInTheDocument();
});

test("main page adds new todo", () => {
  render(<Main addTodo={mockFn} />);
  fireEvent.change(screen.getByTestId("input"), { target: { value: 'new' } });
  fireEvent.click(screen.getByText("Add"));
  expect(mockFn).toHaveBeenCalled();
});

test("main page not adds new todo", () => {
  render(<Main />);
  fireEvent.change(screen.getByTestId("input"), { target: { value: '' } });
  fireEvent.click(screen.getByText("Add"));
  expect(setStateMock).not.toHaveBeenCalled();
});
