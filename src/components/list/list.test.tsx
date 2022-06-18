import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import List from "./list";
import EditItem from "../edit-item/edit-item";

const setStateMock = jest.fn();
const useStateMock: any = (useState: any) => [useState, setStateMock];

afterEach(() => {
    setStateMock.mockClear();
})


describe('renders list component', () => {
    test("empty", () => {
        render(<List list={[]} onDone={() => { }} onRemove={() => { }} onUpdate={() => { }} />);
        const linkElement = screen.getByText("No Data");
        expect(linkElement).toBeInTheDocument();
    });

    test("elements with actions", () => {
        let doneFn = jest.fn();
        let removeFn = jest.fn();
        render(<List list={[{ title: 'test', done: false }]} onDone={doneFn} onRemove={removeFn} onUpdate={() => { }} />);
        fireEvent.click(screen.getByText("Done"));
        fireEvent.click(screen.getByText("Remove"));
        expect(doneFn).toHaveBeenCalled();
        expect(removeFn).toHaveBeenCalled();
    });

    test("with edit item", () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        render(<List list={[{ title: 'test', done: false }]} onDone={() => { }} onRemove={() => { }} onUpdate={() => { }} />);
        fireEvent.click(screen.getByText("Update"));
        expect(setStateMock).toHaveBeenCalled();
    });

})

