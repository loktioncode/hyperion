import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import pic1 from "../../assets/clubhouse/club1.webp";
import pic2 from "../../assets/clubhouse/club2.webp";
import pic3 from "../../assets/clubhouse/club3.webp";
import pic4 from "../../assets/clubhouse/club4.webp";
import pic5 from "../../assets/clubhouse/club5.webp";
import pic6 from "../../assets/clubhouse/club6.webp";
import ClubHouseCard from "../../styled/ClubHouseCard";

const Wrapper = styled.section`
    margin:0 20px;
    border-radius:10px 0px 0px 10px;
    background:${props => props.theme.color.blue3};
    padding:5%;
    text-align:center;
    @media(min-width:992px){
      margin:0% 40px;
      
    }
    h2{
        color:#ffffff;
    }
    p{
        color:#ffffff;
    }
    .inner{
      margin-top:30px;
      @media(min-width:768px){
        display: flex;
        gap:30px;
        justify-content:center;
        flex-wrap:wrap;
      }
    }
`;

const list = [
  {
    image: pic1,
    title: "LoktionCode (UI/UX Designer) ",
    text: "Makes the designs super cool and easy on the eyes",
  },
  {
    image: pic2,
    title: "LoktionCode (UI/UX Designer) ",
    text: "Makes the designs super cool and easy on the eyes",
  },
  {
    image: pic3,
    title: "LoktionCode (UI/UX Designer) ",
    text: "Makes the designs super cool and easy on the eyes",
  },
  
];

function Who() {
  return (
    <Wrapper>
      <Heading>Success stories from future leaders.</Heading>
      <Paragraph>And their job in the clubhouse</Paragraph>
      <div className="inner">
        {list.map((item, i) => {
          return <ClubHouseCard 
          key={i}
          image={item.image}
          title={item.title}
          text={item.text}
          />;
        })}
      </div>
    </Wrapper>
  );
}

export default Who;
