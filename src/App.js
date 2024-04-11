import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"; 
import Alert from "./Components/Alert";
import Home from './Components/Home';
import TextForm from './Components/TextForm'; 
import TextExtract from './Components/TextExtract';
import LinkShortener from './Components/LinkShortner';
import Secret from './Components/Secret';
import PasswordGenerator from './Components/PasswordGen';
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "#052d39";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<Home mode={mode} showAlert={showAlert} />}
          />
          <Route
            path="/textform"
            element={<TextForm mode={mode} showAlert={showAlert} />}
          />
          <Route path="/textextractor" element={<TextExtract mode={mode} showAlert={showAlert} />} />
          <Route path="/linkshortener" element={<LinkShortener mode={mode} showAlert={showAlert} />} />
          <Route path="/Secret" element={<Secret mode={mode} showAlert={showAlert} />} />
          <Route path="/PasswordGenerator" element={<PasswordGenerator mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
