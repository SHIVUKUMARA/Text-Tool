import React from "react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsPersonCircle,
} from "react-icons/bs";

const About = (props) => {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#817e7e00" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="mt-4">Welcome to Text Tool!</h1>
      <i className="lead">
        Text Tool is a handy web application designed to assist you with various
        text-related tasks. Whether you need to manipulate text, extract
        specific information, or analyze content, Text Tool is here to help.
      </i>

      <h2 className="mt-4">Features:</h2>
      <ul className="list-group">
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Text Transformation: </strong> Convert text to
          uppercase or lowercase, remove extra spaces, and more.
        </li>
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Email Extraction: </strong> Easily extract email
          addresses from text.
        </li>
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Word Count and Reading Time: </strong> Get insights
          into the number of words and estimated reading time of your text.
        </li>
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Link Shortener: </strong> Generate shortened URLs for
          easy sharing.
        </li>
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Text-to-Speech: </strong> Convert text into speech.
        </li>
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Speech-to-Text: </strong> Convert speech into text.
        </li>
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Image Text Extraction: </strong> Extract text from
          images using OCR (Optical Character Recognition).
        </li>
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Encryption and Decryption: </strong> Encrypt and
          decrypt text for security purposes.
        </li>
        <li className="list-group-item" style={{ ...myStyle, border: "none" }}>
          &#9733; <strong>Password Generator: </strong> Generate strong, random
          passwords for enhanced security.
        </li>
      </ul>

      <h2 className="mt-4">Development Details:</h2>
      <p>
        Text Tool was built using the React JavaScript library, allowing for a
        smooth and responsive user experience. It utilizes various libraries for
        specific functionalities, such as Tesseract.js for image text extraction
        and React Bootstrap for the user interface.
      </p>

      <h2 className="mt-4">Contact Me:</h2>
      <p>
        If you have any questions, feedback, or suggestions for Text Tool, feel
        free to reach me out at{" "}
        <a href="mailto:shivukumaraspatil01gmail.com" className="text-warning">
          shivukumaraspatil01@gmail.com
        </a>
        . I'd love to hear from you!
      </p>
      <div>
        <strong>Follow Me on:</strong>
        <Link
          to="https://github.com/SHIVUKUMARA"
          target="_blank"
          className="mx-3"
        >
          <BsGithub
            style={{
              color: "#000000",
              fontSize: "2em",
            }}
          />
        </Link>
        <Link
          to="https://www.linkedin.com/in/shivukumara/"
          target="_blank"
          className="mx-3"
        >
          <BsLinkedin
            style={{
              color: "#0084ff",
              fontSize: "2em",
            }}
          />
        </Link>
        <Link
          to="https://www.facebook.com/shivakumara.patil.940?sfnsn=wiwspwa&mibextid=RUbZ1f"
          target="_blank"
          className="mx-3"
        >
          <BsFacebook
            style={{
              color: "#0084ff",
              fontSize: "2em",
            }}
          />
        </Link>
        <Link
          to="https://instagram.com/shivukumara_patil"
          target="_blank"
          className="mx-3"
        >
          <BsInstagram
            style={{
              color: "#ba7d26",
              fontSize: "2em",
            }}
          />
        </Link>
        <Link
          to="https://myportfolio-gl6y.onrender.com/"
          target="_blank"
          className="mx-3"
        >
          <BsPersonCircle
            style={{
              color: "#e70d39",
              fontSize: "2em",
            }}
          />
        </Link>
      </div>
      <p className="my-3">Thank you for using Text Tool!</p>
    </div>
  );
};

export default About;
