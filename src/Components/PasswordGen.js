import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function PasswordGenerator(props) {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let characters = "";
    if (includeUpperCase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowerCase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()-_=+";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(newPassword);
    props.showAlert("Password generated successfully!", "success");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    props.showAlert("Password copied to clipboard!", "success");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-4">
      <div
        className="card p-4"
        style={{
          backgroundColor: props.mode === "dark" ? "rgb(70 75 110)" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="text-center">Password Generator</h2>
        <Form.Group controlId="length">
          <Form.Label>Password Length:</Form.Label>
          <Form.Control
            type="number"
            value={length}
            max={20}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </Form.Group>
        <Form.Group controlId="includeNumbers">
          <Form.Check
            type="checkbox"
            label="Include Numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </Form.Group>
        <Form.Group controlId="includeSymbols">
          <Form.Check
            type="checkbox"
            label="Include Symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </Form.Group>
        <Form.Group controlId="includeUpperCase">
          <Form.Check
            type="checkbox"
            label="Include Uppercase Letters"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
          />
        </Form.Group>
        <Form.Group controlId="includeLowerCase">
          <Form.Check
            type="checkbox"
            label="Include Lowercase Letters"
            checked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.checked)}
          />
        </Form.Group>
        <Button className="btn btn-primary my-3" onClick={generatePassword}>
          Generate Password
        </Button>
        <Button className="btn btn-success my-2" onClick={copyToClipboard}>
          Copy Password
        </Button>
        <p className="text-center">Your Password: {password}</p>
      </div>
    </div>
  );
}

export default PasswordGenerator;
