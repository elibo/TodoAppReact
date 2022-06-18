import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EditItem from "./edit-item";
import { click } from "@testing-library/user-event/dist/click";

let clickFn = jest.fn();


afterEach(() => {
    clickFn.mockClear();
})

test("renders Edit Item component", () => {
    render(<EditItem title="test" onSave={() => { }} />);
    const linkElement = screen.getByText("Save");
    expect(linkElement).toBeInTheDocument();
});

test("renders Edit Item component with click", () => {
    render(<EditItem title="test" onSave={() => { }} />);
    fireEvent.click(screen.getByText("Save"));
    clickFn();
    expect(clickFn.mock.calls.length).toBe(1);
});
