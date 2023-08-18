import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import TeamWorkCard from "../../styled/TeamWorkCard";

const Wrapper = styled.section`
  img {
    width: 100%;
  }
  h2 {
    span {
      display: unset;
    }
  }
  h3 {
    margin: 0 auto 20px;
    font-family: ${(props) => props.theme.fam.medium};
    text-align: center;
    padding-top: 5%;
    @media(min-width:768px){
        font-size:30px;
    }
    span {
      font-family: ${(props) => props.theme.fam.extrabold};
    }
  }
  .top {
    @media (min-width: 992px) {
      display:flex;
      justify-content:space-between;
      align-items:center;
      
    }
    @media (min-width: 1200px) {
      padding-right:60px;
      padding-left:60px;
    }
    img{
       object-fit:contain;
       max-width:650px;
       @media(min-width:992px){
        width:45%;
       } 
    }
    .left-text{
        @media(min-width:992px){
            width:65%;
            padding-left: 10px;
            padding-left: 10px;

        }
    }
    h2 {
      margin-bottom: 20px;
    }
  }
  .bottom {
    padding: 5% 20px 10%;
    @media (min-width: 768px) {
      display: flex;
      gap: 15px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    @media (min-width: 992px) {
      gap: 30px;
    }
    @media (min-width: 1200px) {
      padding-right:60px;
      padding-left:60px;
    }
    .team-card{
        @media(min-width:768px){
            width:43%;
            margin-bottom:0;
        }
        @media(min-width:992px){
            width:44%;
        }
        @media(min-width:1200px){
            width:27%;
        }
        @media(min-width:1400px){
            width:28.5%;
        }
    }
    h3 {
      text-align: unset;
    }
  }
`;

const team = [
  {
    link: "services",
    heading: "Client Name Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "code",
    bgColor: "#74C3C4",
    spanColor: "#4EB4B6",
    type: "Product Design",
  },
  {
    link: "services",
    heading: "Client Name Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "paint",
    bgColor: "#BD4393",
    spanColor: "#AC257D",
    type: "App Development",
  },
  {
    link: "services",
    heading: "Client Name Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "design",
    bgColor: "#EDBB4D",
    spanColor: "#D2A43D",
    type: "Branding",
  },
  {
    link: "services",
    heading: "Client Name Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
    icon: "network",
    bgColor: "#E76713",
    spanColor: "#D26319",
    type: "Networking",
  },
  {
    link: "services",
    heading: "Client Name Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "network",
    bgColor: "#20A1D2",
    spanColor: "#1A95C3",
    type: "App Development",
  },
  {
    link: "services",
    heading: "Client Name Here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: "network",
    bgColor: "#53C58A",
    spanColor: "#43B87B",
    type: "Product Design",
  },
];

function TeamWork() {
  return (
    <Wrapper>

      <div className="top">
        <div className="left-text">
          <Heading textColor="#bd4393">
            We’ll take you from beginner
            to  <span>job ready.</span>
          </Heading>
          <Paragraph>
            Get the best possible preparation for your new career in tech, with mock interviews, assistance with polishing your CV and developer portfolio, and professional interview tips from our in-house career services team.
          </Paragraph>
        </div>
        <img src="https://www.hyperiondev.com/static/images/couple.webp" alt="couple using computer" />
      </div>

    </Wrapper>
  );
}

export default TeamWork;
