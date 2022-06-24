import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToolBar from "./ToolBar";

describe("<ToolBar />", () => {
  test("it should mount", () => {
    render(<ToolBar />);

    const template = screen.getByTestId("Box");

    expect(template).toBeInTheDocument();
  });
});
