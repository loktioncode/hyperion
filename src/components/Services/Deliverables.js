import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import pic1 from '../../assets/deliverables/blocks.webp';
import pic2 from '../../assets/deliverables/blocks.webp';
import pic3 from '../../assets/deliverables/blocks2.webp';
import pic4 from '../../assets/deliverables/blocks3.webp';

const Wrapper = styled.section`
  padding:10% 20px;
  @media(min-width:992px){
        padding:5%;
      }
  @media(min-width:1200px){
        padding:5% 10%;
      }
  h2{
    margin-bottom:20px;
  }
  p{
    max-width:750px;
  }
  .inner{
    display:flex;
    gap:15px;
    flex-wrap: wrap;
    margin:40px auto 0;
    justify-content: center;
    .item{
      width:41%;
      background:rgba(249, 249, 249, 1);
      border-radius:8px;
      text-align:center;
      padding:10px;
      @media(min-width:768px){
        width:25%;
        text-align:left;
        padding:22px;
      }
      @media(min-width:992px){
        width:19%;
      }
     
      h3{
        font-family:${props => props.theme.fam.bold};
        font-size:25px;
      }
      img{
        width:70%;

      }
      p{
        margin-left: 0;
      }
    }
  }
`;

const list = [
    {
        title:"Desktop App",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et",
        image:pic1
    },
    {
        title:"Web App",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et",
        image:pic2
    },
    {
        title:"Android App",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et",
        image:pic3
    },
    {
        title:"iOS App",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et",
        image:pic4
    },
    {
        title:"Desktop App",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et",
        image:pic1
    },
    {
        title:"Web App",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et",
        image:pic2
    },
    {
        title:"Android App",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et",
        image:pic3
    },
    {
        title:"iOS App",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et",
        image:pic4
    },
]

function Deliverables() {
  return (
    <Wrapper>
      <Heading>Service Deliverables</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
      <div className="inner">
         {
      list.map((item,i)=>{
        return <div key={i} className="item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <Paragraph>{item.text}</Paragraph>
        </div>
      })
    }
      </div>
   
    </Wrapper>
  );
}

export default Deliverables;
