import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "components/ContactForm";
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;

const mockSubmit = jest.fn((name, email, message) => {
  return Promise.resolve({ name, email, message });
});

describe("Contact Form", () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  it("should display required error when value is invalid", async () => {
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(3);
    expect(mockSubmit).not.toBeCalled();
  });

  it("should display min length error when name is invalid", async () => {
    fireEvent.input(screen.getByPlaceholderText("Name"), {
      target: {
        value: "n",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Email"), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Message"), {
      target: {
        value:
          "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByPlaceholderText("Name").value).toBe("n");
    expect(screen.getByPlaceholderText("Email").value).toBe("test@mail.com");
    expect(screen.getByPlaceholderText("Message").value).toBe(
      "Somewhere in La Mancha, in a place whose name I do not care to remember…"
    );
  });

  it("should display matching error when email is invalid", async () => {
    fireEvent.input(screen.getByPlaceholderText("Name"), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Email"), {
      target: {
        value: "test",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Message"), {
      target: {
        value:
          "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByPlaceholderText("Email").value).toBe("test");
    expect(screen.getByPlaceholderText("Name").value).toBe("name");
    expect(screen.getByPlaceholderText("Message").value).toBe(
      "Somewhere in La Mancha, in a place whose name I do not care to remember…"
    );
  });

  it("should display matching error when message is invalid", async () => {
    fireEvent.input(screen.getByPlaceholderText("Name"), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Email"), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Message"), {
      target: {
        value: "S",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSubmit).not.toBeCalled();
    expect(screen.getByPlaceholderText("Name").value).toBe("name");
    expect(screen.getByPlaceholderText("Email").value).toBe("test@mail.com");
    expect(screen.getByPlaceholderText("Message").value).toBe("S");
  });

  it("should not display error when value is valid", async () => {
    fireEvent.input(screen.getByPlaceholderText("Name"), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Email"), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Message"), {
      target: {
        value:
          "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockSubmit).toBeCalledWith(
      "name",
      "test@mail.com",
      "Somewhere in La Mancha, in a place whose name I do not care to remember…"
    );
    expect(screen.getByPlaceholderText("Name").value).toBe("");
    expect(screen.getByPlaceholderText("Email").value).toBe("");
    expect(screen.getByPlaceholderText("message").value).toBe("");
  });
});
