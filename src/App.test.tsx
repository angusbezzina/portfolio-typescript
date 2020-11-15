import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "mutationobserver-shim";

import App from "./App";

global.MutationObserver = window.MutationObserver;

// TODO: Fix this test
it.skip("renders without crashing", () => {
  render(<App />);
});


afterEach(cleanup);

test("<App />", () => {
  const { debug, getByTestId } = render(<App />);
  // debug();
  const englishLanguageButton = getByTestId("english-language-button");
  const spanishLanguageButton = getByTestId("spanish-language-button");
  const welcomeText = getByTestId("welcome-text");

  // Asserts that the language buttons to be buttons
  expect(englishLanguageButton.tagName).toBe("BUTTON");
  expect(spanishLanguageButton.tagName).toBe("BUTTON");

  // Asserts that the welcome banner text changes with butto buttons to be buttons
  fireEvent.click(englishLanguageButton);
  expect(welcomeText.textContent).toBe("Welcome.");

  fireEvent.click(spanishLanguageButton);
  expect(welcomeText.textContent).toBe("Bienvenido.");
});