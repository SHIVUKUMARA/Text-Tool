import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);

  const handleExtractEmails = () => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const extractedEmails = text.match(emailRegex) || [];
    setEmails(extractedEmails);
    props.showAlert("Emails extracted successfully!", "success");
    if (extractedEmails.length === 0) {
      props.showAlert("No emails found in the text", "warning");
    } else {
      const emailsString = extractedEmails.join("\n");
      navigator.clipboard.writeText(emailsString); 
      props.showAlert("Emails copied to clipboard!", "success");
    }
  }; 

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
    if (text.length === 0) {
      props.showAlert("Text box is empty", "warning");
    }
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
    if (text.length === 0) {
      props.showAlert("Text box is empty", "warning");
    }
  };

  const handleClearClick = () => {
    setText("");
    setEmails([]);
    props.showAlert("Text box is cleared", "success");
    if (text.length === 0) {
      props.showAlert("Text box is empty", "warning");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to Clipboard!", "success");
    if (text.length === 0) {
      props.showAlert("Text box is empty", "warning");
    }
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
    if (text.length === 0) {
      props.showAlert("Text box is empty", "warning");
    }
  };

  const handleTextToSpeech = () => {
    if (text.length === 0) {
      props.showAlert("Type something in the text box", "warning");
      return;
    }

    if ("speechSynthesis" in window) {
      const phrase = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(phrase);
    } else {
      alert("Text-to-Speech is not supported in this browser.");
    }
  };

  const handleSpeechToText = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.start();
  };

  const handleRemoveSpecialCharacters = () => {
    const regex = /[^\w\s]/g; // Regular expression to match non-word characters (excluding spaces)
    const newText = text.replace(regex, ""); // Replace all special characters with an empty string
    setText(newText); // Update the state with the modified text
    props.showAlert("Special characters removed!", "success");
    if (text.length === 0) {
      props.showAlert("Text box is empty", "warning");
    }
  };

  return (
    <>
      <div
        className="my-3 container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>Welcome to Text tool</h1>
          <textarea
            className="form-control"
            id="textBox"
            value={text}
            onChange={handleOnChange}
            rows="10"
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === "dark" ? "#a7accd" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtractEmails}
        >
          Extract Emails
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-info mx-2" onClick={handleSpeechToText}>
          Speech to Text
        </button>
        <button className="btn btn-info mx-2 my-2" onClick={handleTextToSpeech}>
          Text to Speech
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className="btn btn-warning mx-2 my-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          className="btn btn-warning mx-2 my-2"
          onClick={handleRemoveSpecialCharacters}
        >
          Remove Special Characters
        </button>
      </div>
      {emails.length > 0 && (
        <div className="container">
          <h2>Extracted Emails</h2>
          <ul>
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length} </b>
          characters
        </p>
        <p>
          Needs{" "}
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          minutes to read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in text box to preview it here"}
        </p>
      </div>
    </>
  );
};

export default TextForm;

