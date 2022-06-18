import React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "./list-item";

test("renders ListItem component", () => {
    render(<ListItem title="listitem" done={false} onDone={() => { }} onRemove={() => { }} onUpdate={() => { }} />);
    const linkElement = screen.getByText("listitem");
    expect(linkElement).toBeInTheDocument();
});

test("renders ListItem component done", () => {
    render(<ListItem title="listitem" done={true} onDone={() => { }} onRemove={() => { }} onUpdate={() => { }} />);
    const linkElement = screen.getByText("listitem");
    expect(linkElement).toBeInTheDocument();
});
