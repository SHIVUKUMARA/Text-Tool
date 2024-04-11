import React, { useState } from "react";

const Secret = (props) => {
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [history, setHistory] = useState([]);

  const encrypt = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 + 3) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  };

  const decrypt = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 - 3 + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 - 3 + 26) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  };

  const handleEncrypt = () => {
    const encrypted = encrypt(inputText);
    setEncryptedText(encrypted);
    setInputText(""); // Clear input after encryption
    addToHistory(inputText, encrypted);
    if(encrypted.length === 0){
      props.showAlert("Text box is empty", "warning");
    }else{
      props.showAlert("Text encrypted successfully!", "success");
    }
  };

  const handleDecrypt = () => {
    const decrypted = decrypt(encryptedText);
    setEncryptedText(""); // Clear input after decryption
    addToHistory(encryptedText, decrypted);
    if(decrypted.length === 0){
      props.showAlert("Text box is empty", "warning");
    }else{
      props.showAlert("Text decrypted successfully!", "success");
    }
};

  const addToHistory = (original, transformed) => {
    const newHistory = [...history, { original, transformed }];
    setHistory(newHistory);
  };

  const handleClear = () => {
    setInputText("");
    setEncryptedText("");
    setHistory([]);
    if(inputText.length === 0 && encryptedText.length === 0 && history.length === 0){
      props.showAlert("Text box is empty", "warning");
    }else{
    props.showAlert("Input box and history cleared!", "info");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center my-3">
      <div
        className="card p-4"
        style={{
          backgroundColor: props.mode === "dark" ? "rgb(70 75 110)" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="d-flex flex-column">
          <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            Encrypt
          </h3>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows="2"
            cols="40"
            placeholder="Enter text to encrypt"
            style={{
              backgroundColor: props.mode === "dark" ? "#adb5bd" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleEncrypt}>
            Encrypt
          </button>
        </div>
        <div>
          <div className="d-flex flex-column">
            <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Decrypt
            </h3>
            <textarea
              value={encryptedText}
              onChange={(e) => setEncryptedText(e.target.value)}
              rows="2"
              cols="40"
              placeholder="Enter text to decrypt"
              style={{
                backgroundColor: props.mode === "dark" ? "#adb5bd" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
            <button className="btn btn-primary my-3" onClick={handleDecrypt}>
              Decrypt
            </button>
            <button className="btn btn-danger my-3" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3
          className="my-2"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          History
        </h3>
        <ul>
          {history.map((item, index) => (
            <li
              key={index}
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              Original: <strong>{item.original}</strong> | Transformed:{" "}
              <strong>{item.transformed}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Secret;
