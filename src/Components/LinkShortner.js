import React, { useState } from "react";

const LinkShortener = (props) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState({});

  const handleShorten = () => {
    if (!isValidUrl(originalUrl)) {
      props.showAlert("Please enter a valid URL", "warning");
      return;
    }

    const shortenedUrl = Math.random().toString(36).substring(7);
    setShortenedUrls({ ...shortenedUrls, [shortenedUrl]: originalUrl });
    setOriginalUrl("");

    props.showAlert("URL shortened successfully!", "success");
  };

  // Function to check if a string is a valid URL
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="container">
      <h1
        className="mt-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        Link Shortener
      </h1>
      <div className="mb-3">
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="form-control"
          placeholder="Enter URL to shorten"
        />
        <button onClick={handleShorten} className="btn btn-primary mt-2">
          Shorten
        </button>
      </div>
      <div>
        <h6 className={props.mode === "dark" ? "text-warning" : "text-danger"}>
          <i>
            ***The Generated URL only works in your browser, because it is built
            in React, backend is not used.***
          </i>
        </h6>

        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Shortened URLs
        </h2>
        <ul>
          {Object.entries(shortenedUrls).map(([shortenedUrl, originalUrl]) => (
            <li key={shortenedUrl}>
              <a
                href={originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: props.mode === "dark" ? "white" : "", textDecoration: "none" }}
              >
                {shortenedUrl}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinkShortener;
