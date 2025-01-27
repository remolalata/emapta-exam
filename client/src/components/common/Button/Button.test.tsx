import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("should render with the correct label", () => {
    render(<Button label="Click Me" />);
    
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should apply the primary variant styles by default", () => {
    render(<Button label="Primary Button" />);

    const button = screen.getByText("Primary Button");
    expect(button).toHaveClass("bg-green-400 hover:bg-green-500 text-white");
  });

  it("should apply the secondary variant styles when variant is 'secondary'", () => {
    render(<Button label="Secondary Button" variant="secondary" />);

    const button = screen.getByText("Secondary Button");
    expect(button).toHaveClass("bg-white text-gray-500");
  });

  it("should call the onClick handler when clicked", () => {
    const onClickMock = vi.fn();
    render(<Button label="Click Me" onClick={onClickMock} />);

    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("should be disabled when the disabled prop is true", () => {
    render(<Button label="Disabled Button" disabled={true} />);

    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50 disabled:cursor-not-allowed");
  });

  it("should include additional classNames when passed via className prop", () => {
    render(<Button label="Custom Class" className="custom-class" />);

    const button = screen.getByText("Custom Class");
    expect(button).toHaveClass("custom-class");
  });

  it("should render with the correct type", () => {
    render(<Button label="Submit" type="submit" />);

    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("type", "submit");
  });
});
