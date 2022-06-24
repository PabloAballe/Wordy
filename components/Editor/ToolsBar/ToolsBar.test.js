import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToolsBar from "./ToolsBar";

describe("<ToolsBar />", () => {
  test("it should mount", () => {
    render(<ToolsBar />);

    const template = screen.getByTestId("Box");

    expect(template).toBeInTheDocument();
  });
});
