import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";
import { TextField } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";

const Wrapper = styled.footer`
padding:10% 20px;
position:relative;
&:before{
  content:"";
  background:#FDE030;
  height:4vh;
  width:90%;
  position: absolute;
  bottom:0;
  left:50%;
  border-radius:20px 20px 0 0;
  transform:translateX(-50%);
}
@media(min-width:992px){
  display:flex;
  justify-content: space-between;
  padding:10%;
  .left{
    width:45%;
    margin-right:20px;
    max-width:500px;
    display:flex;
    flex-direction:column;
  }
  .right{
    width:45%;
  }
}
  p {
    color: #444;
    font-size: 15px;
    font-family: ${(props) => props.theme.fam.medium};
    font-weight: 500;
    line-height: 25px;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 35px;
    }
  }
  .copy-lap {
    display: none;
    @media (min-width: 992px) {
      display: flex;
      align-items: flex-end;
      flex:1;
    }
  }
  .copy-mob {
    @media (min-width: 992px) {
      display: none;
    }
  }
  img{
    width:100%;
    max-width:350px;
    margin:0 auto;
    display:block;

  }
  form{
    margin-top:30px;
    background:${props => props.theme.color.blue2};
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom:20px;
    .MuiFormControl-root {
   flex:1;
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
  button{
    background:transparent;
    border:none;
    border-left:2px solid ${props => props.theme.color.yellow};
    padding:0 15px;
    text-transform:uppercase;
    display:flex;
    align-items:center;
    font-family:${props => props.theme.fam.bold};
    font-size:20px;
    color:#ffffff;
    svg{
        color:${props => props.theme.color.yellow};
        font-size:23px;
    }
  }
  }
  .right{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    .right-inner{
      width:48%;
      margin-bottom:20px;
      h3{
        font-size:20px;
        font-family:${props => props.theme.fam.bold};
        margin-bottom:10px;
        @media(min-width:992px){
          font-size:25px;
          width:max-content;
        }
      }
      ul{
        li{
          a{
            color:#000000;
            font-family:${props => props.theme.fam.medium};
            display:block;
            padding:10px 0;
            svg{
              color:${props => props.theme.color.blue3};
            }
          }
        }
      }
      
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="left">
        <img src="./images/logoblack.webp" alt="Loktion Logo Black" />
        <Paragraph>
          Get notified of any promo’s we run on our services, we get too excited
          sometimes and offer promos
        </Paragraph>
        <form action="">
          <TextField
            id="subscribeMail"
            variant="standard"
            name="subscribeMail"
            label="name@gmail.com"
            required
          />
          <button type="submit">
            Submit <FiArrowUpRight />
          </button>
        </form>
        <p className="copy-lap">Copyright © 2023 All Rights Reserved</p>
      </div>
      <div className="right">
        <div className="right-inner">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link>
                <BsArrowReturnRight /> About Us
              </Link>
              <Link>
                <BsArrowReturnRight /> Our Services
              </Link>
              <Link>
                <BsArrowReturnRight /> Our Portfolio
              </Link>
              <Link>
                <BsArrowReturnRight /> Get A Quote
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-inner">
          <h3>UI/UX Design</h3>
          <ul>
            <li>
              <Link>
                <BsArrowReturnRight /> Website Design
              </Link>
              <Link>
                <BsArrowReturnRight /> Application Design
              </Link>
              <Link>
                <BsArrowReturnRight /> Dashboard Design
              </Link>
              <Link>
                <BsArrowReturnRight /> Experience Design
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-inner">
          <h3>Branding</h3>
          <ul>
            <li>
              <Link>
                <BsArrowReturnRight /> Logo Design
              </Link>
              <Link>
                <BsArrowReturnRight /> Brand Design
              </Link>
              <Link>
                <BsArrowReturnRight /> Social Media Posts
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-inner">
          <h3>Software Development</h3>
          <ul>
            <li>
              <Link>
                <BsArrowReturnRight /> Website Design
              </Link>
              <Link>
                <BsArrowReturnRight /> Application Design
              </Link>
              <Link>
                <BsArrowReturnRight /> Dashboard Design
              </Link>
              <Link>
                <BsArrowReturnRight /> Experience Design
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-inner">
          <h3>Systems Networking</h3>
          <ul>
            <li>
              <Link>
                <BsArrowReturnRight /> Sub Catergory
              </Link>
              <Link>
                <BsArrowReturnRight /> Sub Catergory
              </Link>
              <Link>
                <BsArrowReturnRight /> Sub Catergory
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-inner">
          <h3>Systems Security</h3>
          <ul>
            <li>
              <Link>
                <BsArrowReturnRight /> Software Security
              </Link>
              <Link>
                <BsArrowReturnRight /> Data Security
              </Link>
              <Link>
                <BsArrowReturnRight /> Network Security
              </Link>
            </li>
          </ul>
        </div>
        <p className="copy-mob">Copyright © 2023 All Rights Reserved</p>
      </div>
    </Wrapper>
  );
}

export default Footer;
