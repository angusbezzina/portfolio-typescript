import React from "react";
import classnames from "classnames";

import { LanguageContext } from 'components/LanguageContext'
import "styles/common.css";

const EnglishLanguageButton = () => {
  const { state, dispatch} = React.useContext(LanguageContext);
  return (
    <button
      className={classnames("languageButton", {
        languageButtonActive: state.language === "english",
      })}
      onClick={() =>{
        dispatch({type: 'set', payload: 'english'});
      }}
    >
      En<span>.</span>
    </button>
  );
};

export default EnglishLanguageButton;
