import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import Fade from "react-reveal";
import axios from "axios";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { FiArrowUpRight } from "react-icons/fi";

const Wrapper = styled.section`
  background: ${(props) => props.theme.color.blue3};
  padding: 10% 20px;
  @media(min-width:992px){
    display:flex;
    flex-wrap:wrap;
    position:relative;
    padding-bottom:3%
  }
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
    max-width: 450px;
    @media(min-width:992px){
      max-width:550px;
      z-index:1;
      width:45%;
      object-fit:contain;

    }
  }
  h2 {
    color: #ffffff;
    br {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
  }
  p {
    color: #ffffff;
  }
  .left{
    max-width:535px;
    margin:0 auto;
    @media(min-width:92px){
      width:45%;
    }
  }
  form {
    
    margin-top: 30px;
    
    
  }
  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 20px;
    background: #5e93c9;
    height: 50px;
    input,
    textarea,
    label {
      color: #ffffff !important;
      padding-left: 10px;
      font-family: ${(props) => props.theme.fam.semibold} !important;
    }
    .MuiInputBase-root {
      &:before,
      &:after {
        border-bottom: none !important;
      }
    }
    .MuiInputBase-root {
      &:before {
        border-bottom: none !important;
      }
    }
    [data-shrink="true"] {
      color: #ffffff !important;

      &:after {
        border: none !important;
      }
    }
  }
  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.bold};
    font-weight: 800;
    text-transform: uppercase;
    svg {
      color: ${(props) => props.theme.color.yellow};
    }
  }
  button.download{
    background:  ${(props) => props.theme.color.yellow};
    border: none;
    display: flex;
    align-items: center;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.bold};
    font-weight: 800;
    text-transform: uppercase;
    svg {
      color: ${(props) => props.theme.color.yellow};
    }
  }
  .past-clients {
    background: ${(props) => props.theme.color.lightgreen};
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
    @media(min-width:992px){
      width: 70%;
    padding-right: 20%;
    position: absolute;
    border-radius:26px;
    padding: 5% 16% 5% 5%;
    bottom: -57%;
    left:5%;
    }
    @media(min-width:1200px){
      bottom:-50%;
    }
    .past-inner {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 30px;
      margin-top: 30px;
    }
    h3 {
      font-family: ${(props) => props.theme.fam.bold};
      color: #ffffff;
      font-size: 30px;
      display: block;
  font-weight: 800;
  line-height: 38px;
  @media(min-width:768px){
    font-size:40px; 
    
  }
  @media(min-width:1200px){
    font-size:45px; 
  }
    }
    img {
      width: 40%;
      max-width: 100px;
      @media(min-width:992px){
        width:30%;
      }
    }
  }
`;

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to server or API endpoint
      const response = await axios.post(
        "https://formsubmit.co/email@gmail.com",
        formData
      );
      console.log("Form submission successful:", response.data);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      }, 5000);
    } catch (error) {
      setIsFailed("Form submission failed");
      setTimeout(() => {
        setIsFailed("");
      }, 5000);
    }
  };
  return (
    <Wrapper>
      <div className="left">
        <Heading>
          Accessible education.
        </Heading>
        <Paragraph>
          Leave us your details and we will schedule a call with you
        </Paragraph>
        <form method="POST" onSubmit={handleSubmit}>
          <TextField
            id="fullName"
            variant="standard"
            name="fullName"
            label="Your Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <TextField
            id="email"
            variant="standard"
            name="email"
            label="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            id="message"
            name="message"
            variant="standard"
            label="How Should We Collaborate"
            multiline
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            required
          />

          <input
            type="hidden"
            name="_subject"
            value="New submission from your website!"
          />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_template" value="box" />
          <button type="submit">
            Submit <FiArrowUpRight />
          </button>
        </form>

        {isSubmitted && (
          <div style={{ color: "green", marginTop: 20, textAlign: "center" }}>
            <Fade bottom>Submitted successfully!</Fade>{" "}
          </div>
        )}
        <div style={{ color: "red", marginTop: 20, textAlign: "center" }}>
          <Fade bottom>{isFailed}</Fade>
        </div>
      </div>
      <img src="./images/manyblocks.webp" alt="Contact Blocks Loktion Code" />

      <div className="past-clients">
        <h3>Our graduates call the world's biggest tech companies home</h3>
        <Paragraph>
          Our students graduate knowing how to make high-end, complex websites and software applications. These are just some of the companies our alumni now work for.
        </Paragraph>
        <div className="past-inner">
          <img src="https://www.hyperiondev.com/static/images/brand-logos/FNB.jpg" alt="past clients" />
          <img src="https://www.hyperiondev.com/static/images/brand-logos/EOH.jpg" alt="past clients" />
          <img src="https://www.hyperiondev.com/static/images/brand-logos/ABSA.jpg" alt="past clients" />
          <img src="https://www.hyperiondev.com/static/images/brand-logos/Finchoice.jpg" alt="past clients" />
          <img src="https://www.hyperiondev.com/static/images/brand-logos/BMW.png" alt="past clients" />
          <img src="./images/past.svg" alt="past clients" />
          <img src="./images/past.svg" alt="past clients" />
          <img src="./images/past.svg" alt="past clients" />
          <img src="./images/past.svg" alt="past clients" />
        </div>

        <button className="download">
          DOWNLOAD REPORT 
        </button>
      </div>

    </Wrapper>
  );
}

export default Contact;
