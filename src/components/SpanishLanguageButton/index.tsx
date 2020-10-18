import React from "react";
import classnames from 'classnames';

import { LanguageContext } from "components/LanguageContext";

import 'styles/common.css';

const SpanishLanguageButton = () => {
  const { state, dispatch} = React.useContext(LanguageContext);
  return (
    <button
      className={classnames("languageButton", {
        languageButtonActive: state.language === "spanish",
      })}
      onClick={() =>{
        dispatch({type: 'set', payload: 'spanish'});
      }}
    >
      Es<span>.</span>
    </button>
  );
};

export default SpanishLanguageButton;
