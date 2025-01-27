import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Modal from "./Modal";
import { openModal, closeModal } from "~store/slices/modalSlice";

const mockStore = configureStore();

describe("Modal Component", () => {
  it("should not render when the modal state is false", () => {
    const store = mockStore({ modal: { testModal: false } });

    render(
      <Provider store={store}>
        <Modal modalKey="testModal">
          <p>Modal Content</p>
        </Modal>
      </Provider>
    );

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("should render when the modal state is true", () => {
    const store = mockStore({ modal: { testModal: true } });

    render(
      <Provider store={store}>
        <Modal modalKey="testModal" title="Test Modal">
          <p>Modal Content</p>
        </Modal>
      </Provider>
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should dispatch closeModal when close button is clicked", () => {
    const store = mockStore({ modal: { testModal: true } });
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <Modal modalKey="testModal" title="Test Modal">
          <p>Modal Content</p>
        </Modal>
      </Provider>
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(store.dispatch).toHaveBeenCalledWith(closeModal("testModal"));
  });
});