import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionHeader from "./SectionHeader";

describe("SectionHeader Component", () => {
  it("should render with the correct title", () => {
    render(<SectionHeader title="Test Title" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should apply additional classNames when passed via the className prop", () => {
    render(<SectionHeader title="Styled Title" className="custom-class" />);

    const sectionHeader = screen.getByText("Styled Title").parentElement;
    expect(sectionHeader).toHaveClass("custom-class");
  });

  it("should render the line below the title", () => {
    render(<SectionHeader title="Title with Line" />);

    const lineElement = screen.getByText("Title with Line").nextSibling;
    expect(lineElement).toHaveClass("w-full h-[1px] bg-gray-300 mt-1");
  });
});
