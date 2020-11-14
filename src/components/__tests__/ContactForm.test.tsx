import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "mutationobserver-shim";

import ContactForm from "components/ContactForm";
import { submitContactForm } from "utils/api";

global.MutationObserver = window.MutationObserver;

jest.mock("utils/api");

describe("Contact Form", () => {
    beforeEach(async () => {
    render(<ContactForm />);
    await waitFor(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display required error when value is invalid", async () => {
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(3);
    expect(submitContactForm).not.toBeCalled();
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
        value: "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(submitContactForm).not.toBeCalled();
    expect((screen.getByPlaceholderText("Name") as HTMLInputElement).value).toBe("n");
    expect((screen.getByPlaceholderText("Email") as HTMLInputElement).value).toBe("test@mail.com");
    expect((screen.getByPlaceholderText("Message") as HTMLInputElement).value).toBe(
      "Somewhere in La Mancha, in a place whose name I do not care to remember…",
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
        value: "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(submitContactForm).not.toBeCalled();
    expect((screen.getByPlaceholderText("Email") as HTMLInputElement).value).toBe("test");
    expect((screen.getByPlaceholderText("Name") as HTMLInputElement).value).toBe("name");
    expect((screen.getByPlaceholderText("Message") as HTMLInputElement).value).toBe(
      "Somewhere in La Mancha, in a place whose name I do not care to remember…",
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
    expect(submitContactForm).not.toBeCalled();
    expect((screen.getByPlaceholderText("Name") as HTMLInputElement).value).toBe("name");
    expect((screen.getByPlaceholderText("Email") as HTMLInputElement).value).toBe("test@mail.com");
    expect((screen.getByPlaceholderText("Message") as HTMLInputElement).value).toBe("S");
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
        value: "Somewhere in La Mancha, in a place whose name I do not care to remember…",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(submitContactForm).toBeCalledWith({
      name: "name",
      email: "test@mail.com",
      message: "Somewhere in La Mancha, in a place whose name I do not care to remember…",
    });
    expect((screen.getByPlaceholderText("Name") as HTMLInputElement).value).toBe("");
    expect((screen.getByPlaceholderText("Email") as HTMLInputElement).value).toBe("");
    expect((screen.getByPlaceholderText("Message") as HTMLInputElement).value).toBe("");
  });
});
