import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EditItem from "./edit-item";

let mockFn = jest.fn();
const setStateMock = jest.fn();
const useStateMock: any = (useState: any) => [useState, setStateMock];


afterEach(() => {
    mockFn.mockClear();
    setStateMock.mockClear();
})

test("renders Edit Item component", () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    render(<EditItem title="test" onSave={() => { }} />);
    const linkElement = screen.getByText("Save");
    fireEvent.change(screen.getByDisplayValue('test'), { target: { value: '1' } })
    expect(linkElement).toBeInTheDocument();
    expect(setStateMock).toHaveBeenCalled();
});

test("renders Edit Item component with click", () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    render(<EditItem title="test" onSave={mockFn} />);
    fireEvent.click(screen.getByText("Save"));
    expect(mockFn.mock.calls.length).toBe(1);
});
