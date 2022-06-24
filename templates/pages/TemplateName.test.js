import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TemplateName from "./TemplateName";

describe("<TemplateName />", () => {
  test("it should mount", () => {
    render(<TemplateName />);

    const template = screen.getByTestId("Box");

    expect(template).toBeInTheDocument();
  });
});
