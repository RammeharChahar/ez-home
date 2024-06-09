import React, { useState } from "react";
import "./App.css";
import axios from 'axios';
import mobileLogo from "./assets/ez-small.png";
import researchLImage from "./assets/Research4x.png";
import cameraImage from "./assets/VideoCamera@4x.png";
import ezImage from "./assets/ez@4x.png";
import graphicImage from "./assets/Graphic@4x.png";
import analyticImage from "./assets/Analytics@4x.png";
import dataImage from "./assets/Data@4x.png";

function App() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [apiMessage, setapiMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if (validateEmail(email)) {
        const res = await axios.post('http://34.225.132.160:8002/api',{
            email : email,
        },{
          headers: {
            'Content-Type': 'application/json'
          }
        }
        );
        setapiMessage(res.data.message);
      } else {
        setErrorMessage("Invalid email address");
      }
      setTimeout(()=>{
        setErrorMessage('');
      },4000)
      setTimeout(()=>{
        setapiMessage('');
      },4000)
    } catch (error) {
      console.log(error.response.data);
      setapiMessage(error.response.data.detail);
      setTimeout(()=>{
        setapiMessage('');
      },4000)
    }
  };

  return (
    <div className="App">
      <div className="logo-section">
        <img src={mobileLogo} alt="Hello" className="logo-image" />
        <p className="main-text">A Suite of Business Support Services</p>
        <p className="sec-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </p>
        <form className="form-section-pc" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={errorMessage ? errorMessage : apiMessage ? apiMessage : email}
          className={errorMessage ? 'error-email' : 'email-inputBox'}
          placeholder={'Email Address'}
        />
        <button type="submit" className="submit-btn">
          Contact Us
        </button>
      </form>
      </div>
      <div className="main-section">
        <div className="feature-box">
          <div className="feature-top">
            <img src={researchLImage} alt="" />
            <p className="feature-heading">Presentation Design</p>
          </div>
          <p className="feature-secText">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-top">
            <img src={cameraImage} alt="" />
            <p className="feature-heading">Audio - Visual Production</p>
          </div>
          <p className="feature-secText">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-top">
            <img src={ezImage} alt="" />
            <p className="feature-heading">Translation Services</p>
          </div>
          <p className="feature-secText">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-top">
            <img src={graphicImage} alt="" />
            <p className="feature-heading">Graphic Design</p>
          </div>
          <p className="feature-secText">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-top">
            <img src={analyticImage} alt="" />
            <p className="feature-heading">Research & Analytics</p>
          </div>
          <p className="feature-secText">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-top">
            <img src={dataImage} alt="" />
            <p className="feature-heading">Data Processing</p>
          </div>
          <p className="feature-secText">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet
          </p>
        </div>
      </div>
      <form className="form-section" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={errorMessage ? errorMessage : apiMessage ? apiMessage : email}
          className={errorMessage ? 'error-email' : 'email-inputBox'}
          placeholder={'Email Address'}
        />
        <button type="submit" className="submit-btn">
          Contact Us
        </button>
      </form>
    </div>
  );
}

export default App;
