import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Translate() {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <textarea value={inputText} onChange={handleChange} rows="4" cols="50" />
      <p>{t("enteredText", { text: inputText })}</p>
    </div>
  );
}

export default Translate;
