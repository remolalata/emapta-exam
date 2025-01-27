import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import FormInput from "./FormInput";

describe("FormInput", () => {
  const mockRegister = vi.fn();

  it("renders the input with the correct placeholder", () => {
    render(
      <FormInput
        name="given_name"
        register={mockRegister}
        label="Test Label"
        placeholder="Enter text here"
      />
    );

    expect(screen.getByPlaceholderText("Enter text here")).toBeInTheDocument();
  });

  it("displays an error message when error prop is provided", () => {
    render(
      <FormInput
        name="given_name"
        register={mockRegister}
        error={{ message: "This field is required", type: "required" }}
      />
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("renders the input as disabled when the disabled prop is true", () => {
    render(
      <FormInput
        name="given_name"
        register={mockRegister}
        disabled={true}
      />
    );

    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});