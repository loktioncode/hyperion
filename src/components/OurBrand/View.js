import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Wrapper = styled.section`
padding:10% 20px;
@media(min-width:992px){
  display:flex;
  justify-content: space-between;
  padding:5%;
  .inner{
    width:45%;
  }
}
@media(min-width:1200px){
  padding:5% 15%;
  
}
h2{
  margin-bottom:30px;
  @media(min-width:992px){
    width:45%;
  }
}
p{
  margin-bottom:20px;
}
  a{
        font-family:${props => props.theme.fam.bold};
        color:${props => props.theme.color.blue};
        text-transform:uppercase;
        font-size:20px;
        display:flex;
        align-items: center;
        line-height:40px;
        @media(min-width:768px){
            font-size:30px;
        }
        svg{
            color:${props => props.theme.color.orange};
        }
    }
`;

function View() {
  return (
    <Wrapper>
      <Heading>View Our Complete Service Catalogue </Heading>
      <div className="inner">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
        <Link to="/about">
          About The Brand <FiArrowUpRight />
        </Link>
      </div>
    </Wrapper>
  );
}

export default View;
