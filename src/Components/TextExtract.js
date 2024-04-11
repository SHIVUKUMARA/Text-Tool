import React, { useState } from "react";
import Tesseract from "tesseract.js";

const ImageTextExtractor = (props) => {
  const [imageFile, setImageFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    }; 
    reader.readAsDataURL(file);
  };

  const extractTextFromImage = async () => {
    if (!imageFile) {
      props.showAlert("Please select an image file.", "warning");
      return;
    }

    setLoading(true);

    const { data } = await Tesseract.recognize(imageFile, "eng");

    setExtractedText(data.text);
    setLoading(false);
  };

  const handleClearText = () => {
    setExtractedText("");
    setImageFile(null);
    setImagePreview(null);
    if(extractedText.length === 0){ 
        props.showAlert("Please select an image file.", "warning");
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(extractedText);
    props.showAlert("Text copied to clipboard!", "success");
  };

  return (
    <div className="container">
      <h1
        className="mt-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        Image Text Extractor
      </h1>
      <div className="mb-3">
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      {imagePreview && (
        <div className="mb-3">
          <img
            src={imagePreview}
            alt="Chosen file preview"
            style={{ maxWidth: "50%" }}
          />
        </div>
      )}
      <button className="btn btn-primary mb-3" onClick={extractTextFromImage}>
        Extract Text
      </button>
      <button className="btn btn-danger mb-3 ms-2" onClick={handleClearText}>
        Clear Text
      </button>
      <button
        className="btn btn-success mb-3 ms-2"
        onClick={handleCopyText}
        disabled={!extractedText}
      >
        Copy Text
      </button>
      {loading && (
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Loading...
        </p>
      )}
      {extractedText && (
        <div>
          <h2
            className="mt-4"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            Extracted Text
          </h2>
          <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {extractedText}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageTextExtractor;
