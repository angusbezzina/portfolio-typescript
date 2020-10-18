import React from "react";

type Language = 'english' | 'spanish';

interface LanguageState {
	language: Language;
}

interface SetLanguageAction {
	type: 'set';
	payload: Language;
}
interface ResetLanguageAction {
	type: 'reset';
}
type LanguageAction = SetLanguageAction | ResetLanguageAction;

interface LanguageContext {
	state: LanguageState;
	dispatch(action: LanguageAction): void;
}

const defaultState: LanguageState = { language: 'english' };

export const LanguageContext = React.createContext<LanguageContext>({
	state: defaultState,
	dispatch() {},
});

export const useLanguage = () => React.useContext(LanguageContext);

function languageReducer(
	prevState: LanguageState,
	action: LanguageAction
): LanguageState {
	switch (action.type) {
		case 'set':
			return {
				...prevState,
				language: action.payload,
			};
		case 'reset':
			return {
				...prevState,
				language: 'english',
			};
		default:
			return prevState;
	}
}

export const LanguageContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(languageReducer, defaultState);
	return (
		<LanguageContext.Provider value={{ state, dispatch }}>
			{children}
		</LanguageContext.Provider>
	);
};
