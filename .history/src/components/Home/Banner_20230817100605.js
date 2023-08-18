import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
padding:0 20px;
@media(min-width:1200px){
    padding:0 50px;
}
    .banner-inner{
        background:url('https://www.hyperiondev.com/static/images/backgrounds/home/home-header-image.webp?b24d9cc48e2d');
        height:90vh;
        border-radius:10px 10px 0 0;
        padding:0 5%;
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
  h1 {
    color: #000;
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
          Observe <span>| Reflect |</span> Make
        </h1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco{" "}
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Banner;
