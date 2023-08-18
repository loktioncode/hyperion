import React from "react";
import styled from "styled-components";

const Wrapper = styled.h2`
  color: ${(props) => props.textColor};
  font-size: 30px;
  font-family: ${props => props.theme.fam.bold};
  font-weight: 800;
  line-height: 38px;
  padding-bottom: 20px;
  @media(min-width:768px){
    font-size:40px; 
  }
  @media(min-width:1200px){
    font-size:45px; 
  }
  span {
    color: ${(props) => props.textColor};
  }
`;

function Heading({ children, textColor }) {
  return <Wrapper textColor={textColor}>{children}</Wrapper>;
}

export default Heading;
