import React from "react";
import { render, screen } from "@testing-library/react";
import List from "./list";

test("renders List component", () => {
    render(<List list={[]} onDone={() => { }} onRemove={() => { }} onUpdate={() => { }} />);
    const linkElement = screen.getByText("No Data");
    expect(linkElement).toBeInTheDocument();
});
