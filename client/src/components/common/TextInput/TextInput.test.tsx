import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TextInput from "./TextInput";

describe("TextInput Component", () => {
  it("should render with the correct placeholder", () => {
    render(<TextInput value="" onChange={() => {}} placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("should call onChange handler when text is entered", () => {
    const onChangeMock = vi.fn();
    render(<TextInput value="" onChange={onChangeMock} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Value" } });

    expect(onChangeMock).toHaveBeenCalledWith("New Value");
  });

  it("should render with the correct label", () => {
    render(<TextInput value="" onChange={() => {}} label="Test Label" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should render an error message when errorMessage is provided", () => {
    render(<TextInput value="" onChange={() => {}} errorMessage="This is an error" />);

    expect(screen.getByText("This is an error")).toBeInTheDocument();
  });

  it("should apply the disabled attribute when disabled is true", () => {
    render(<TextInput value="" onChange={() => {}} disabled={true} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("should render with the correct type", () => {
    render(<TextInput value="" onChange={() => {}} type="text" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
  });

  it("should include additional classNames when passed via className prop", () => {
    render(<TextInput value="" onChange={() => {}} className="custom-class" />);

    const container = screen.getByRole("textbox").parentElement;
    expect(container).toHaveClass("custom-class");
  });

  it("should mark the input as required when required is true", () => {
    render(<TextInput value="" onChange={() => {}} required={true} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });
});