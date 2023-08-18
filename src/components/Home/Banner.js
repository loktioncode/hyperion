import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";
import {FiArrowUpRight, FiPlayCircle} from 'react-icons/fi';



const Wrapper = styled.section`
    .banner-inner{
        background:url('https://www.hyperiondev.com/static/images/how-it-works/how-it-works-bg.jpg');
        background-size:cover;
        height:90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media(min-width:768px){
            height:660px;
        }
        @media(min-width:1200px){
            height:85vh;
        }
    }
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      color: #fff;
      margin-top: 20px;
      padding: 8px;
      text-align: center;
      font-size: 20px;
      font-family: ${(props) => props.theme.fam.bold};
      font-weight: 800;
      text-transform: uppercase;
      svg {
        color: ${(props) => props.theme.color.yellow};
      }
    }
    button.play{
      background:  ${(props) => props.theme.color.yellow};
      border: none;
      display: flex;
      align-items: center;
      border-radius: 5px;
      margin-top: 20px;
      padding: 8px;
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-family: ${(props) => props.theme.fam.bold};
      font-weight: 800;
      text-transform: uppercase;
      svg {
        color: #fff;
        padding-left: 5px;
      }
    }
  h1 {
    color: #fff;
    text-align: center;
    font-size: 50px;
    font-family: ${props => props.theme.fam.bold};
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom:30px;
    @media(min-width:768px){
        display:flex;
        align-items: center;
        width:max-content;
        margin:0 auto 30px;
    }
    @media(min-width:992px){
        font-size:75px;
    }
    span{
        color:${props => props.theme.color.green};
        display: block;
        @media(min-width:568px){
        display:unset;
        margin:0 7px;
    }
    }
  }
  p{
    text-align:center;
    @media(min-width:768px){
        max-width:800px;
        margin:0 auto;

    }
  }
  .btn{
    display: flex;
    justify-content: center;
  }
`;

function Banner() {
  return (
    <Wrapper>
      <div className="banner-inner">
        <h1>
        Become a developer the right way
        </h1>
        <Paragraph textColor={'#fff'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco{" "}
        </Paragraph>
        <div className="btn">
        <button >
          SIGN UP  <FiArrowUpRight />
        </button>
        <button className="play">
          WATCH  <FiPlayCircle />
        </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
