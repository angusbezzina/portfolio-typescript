import React from "react";
import classnames from "classnames";

import { LanguageContext } from 'components/LanguageContext'
import "styles/common.css";

const EnglishLanguageButton = () => {
  const { state, setLanguage} = React.useContext(LanguageContext);
  return (
    <button
      className={classnames("languageButton", {
        languageButtonActive: state.language === "english",
      })}
      onClick={() =>{
        setLanguage('english');
      }}
    >
      En<span>.</span>
    </button>
  );
};

export default EnglishLanguageButton;
