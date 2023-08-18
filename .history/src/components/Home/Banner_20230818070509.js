import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";


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
        .btn-inner{
          display:flex;
          justify-content: center;
          padding-top: 10px;
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

    button.play {
      background: ${(props) => props.theme.color.yellow};
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
  h1 {
    background: linear-gradient(270deg,#3b92d3,#52c396);
    display: list-item;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    font-family: var(--MontserratExtraBold);
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
`;

function Banner() {
  return (
    <Wrapper>
      <div className="banner-inner">
        <h1>
        {"</Secure your future."} 
        {"Learn to code.>"}
        </h1>
        <Paragraph>
        Our online coding bootcamps are set apart by integrating human-led code review. Our deep experience will support your ability to code and help you achieve career-focused skills{" "}
        </Paragraph>

 
          <div className="btn-inner">
          <button type="submit">
            Sign Up <FiArrowUpRight />
          </button>

          <button className="play">
           <FiPlay /> {" "} Watch Video
          </button>
          
          </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
