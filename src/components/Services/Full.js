import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";

const Wrapper = styled.section`
  padding: 10% 20px;
  @media(min-width:992px){
    padding:5%;
  }
  @media(min-width:1200px){
    padding:5% 10%;
  }
  h2 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  .inner {
    
    @media(min-width:768px){
      display:flex;
      gap:20px;

    }
    .item{
      margin-bottom:20px;
    position:relative;
    padding:20px ;
    border-radius:20px;
    transition:all 0.7s ease;
    &:hover{
      background:#F9F9F9;
    }
    @media(min-width:768px){
      width:48%;

    }
    &:before{
      content:"";
      width:3px;
      height:90%;
      background:#F9F9F9;
      top:50%;
      transform:translateY(-50%);
      position:absolute;
      left:0;
    }
    }
    h3 {
      font-family: ${(props) => props.theme.fam.bold};
      color: ${(props) => props.theme.color.blue4};
      font-size: 25px;
    }
    .item-inner {
      padding-left: 20px;
      margin-top: 20px;
      h4 {
        font-family: ${(props) => props.theme.fam.bold};
        color: #000000;
        font-size: 20px;
      }
      a{
        color:#000000;
        font-family:${props => props.theme.fam.medium};
        display:flex;
        width:100%;
        padding:15px 0;
        svg{
          color:rgba(83, 197, 138, 1);
          margin-right:10px;
        }
      }
    }
  }
`;

function Full() {
  return (
    <Wrapper>
      <Heading textColor="rgb(83, 197, 138)">
        Our Full List of <br />
        <span>Services</span>
      </Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
      <div className="inner">
        <div className="item">
          <h3>Design</h3>
          <div className="item-inner">
            <h4>Interface</h4>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
          </div>
          <div className="item-inner">
            <h4>Interface</h4>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
          </div>
        </div>
        <div className="item">
          <h3>Design</h3>
          <div className="item-inner">
            <h4>Interface</h4>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
          </div>
          <div className="item-inner">
            <h4>Interface</h4>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
          </div>
        </div>
        <div className="item">
          <h3>Design</h3>
          <div className="item-inner">
            <h4>Interface</h4>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
          </div>
          <div className="item-inner">
            <h4>Interface</h4>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
            <Link>
              <BsArrowReturnRight /> User Expirience Design
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Full;
