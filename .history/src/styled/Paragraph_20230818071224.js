import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  color: ${(props) => props.textColor ?? "#fff"}
  font-size: 15px;
  font-family: ${props => props.theme.fam.medium};
  font-weight: 500;
  line-height: 25px;
  @media(min-width:768px){
    font-size:20px;
    line-height:35px;
  }
`;

function Paragraph({ children,textColor }) {
  return <Wrapper textColor={textColor}>{children}</Wrapper>;
}

export default Paragraph;
