import React from "react";

type Language = "english" | "spanish";

interface LanguageState {
  language: Language;
}

interface SetLanguageAction {
  type: "set";
  payload: Language;
}
interface ResetLanguageAction {
  type: "reset";
}
type LanguageAction = SetLanguageAction | ResetLanguageAction;

interface LanguageContext {
  state: LanguageState;
  setLanguage(language: Language): void;
  resetLanguage(): void;
}

const languageCookie = localStorage.getItem("user_language");
const defaultBrowserLanguage = languageCookie ? languageCookie : window.navigator.language;
const defaultUserLanguage =
  defaultBrowserLanguage.includes("es") || defaultBrowserLanguage === "spanish"
    ? "spanish"
    : "english";
if (!languageCookie) {
  localStorage.setItem("user_language", defaultUserLanguage);
}

const defaultState: LanguageState = { language: defaultUserLanguage };

export const LanguageContext = React.createContext<LanguageContext>({
  state: defaultState,
  setLanguage() {},
  resetLanguage() {},
});

export const useLanguage = () => React.useContext(LanguageContext);

function languageReducer(prevState: LanguageState, action: LanguageAction): LanguageState {
  switch (action.type) {
    case "set":
      return {
        ...prevState,
        language: action.payload,
      };
    case "reset":
      return {
        ...prevState,
        language: "english",
      };
    default:
      return prevState;
  }
}
export const LanguageContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(languageReducer, defaultState);
  function setLanguage(language: Language) {
    dispatch({ type: "set", payload: language });
  }
  function resetLanguage() {
    dispatch({ type: "reset" });
  }
  return (
    <LanguageContext.Provider value={{ state, setLanguage, resetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
