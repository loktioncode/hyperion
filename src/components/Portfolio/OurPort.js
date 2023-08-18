import React from "react";
import styled from "styled-components";
import phone from "../../assets/portfolio/phone.webp";
import phone1 from "../../assets/portfolio/phone1.webp";
import pic1 from "../../assets/portfolio/topiax.webp";
import pic1a from "../../assets/portfolio/topiax1.webp";
import pic2 from "../../assets/portfolio/cognife.webp";
import pic2a from "../../assets/portfolio/cognife1.webp";
import pic3 from "../../assets/portfolio/slicecoffee.webp";
import slice from "../../assets/portfolio/slice.webp";
import chaps from "../../assets/portfolio/slicechaps.webp";
import kidz from "../../assets/portfolio/ekidz.webp";
import kidz1 from "../../assets/portfolio/ekidz1.webp";
import locum from "../../assets/portfolio/locum.webp";
import locum1 from "../../assets/portfolio/locum1.webp";
import PortDiv from "../../styled/PortDiv";

const Wrapper = styled.section`
    padding:20px;
    @media(min-width:992px){
      padding:40px;
    }
    .middle{
      @media(min-width:568px){
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        gap:20px;
      }
        img{
            width:100%;
            margin-bottom:20px;
            @media(min-width:568px){
        width:48%;
      }
            @media(min-width:992px){
        width:49%;
      }
        }
    }
`;

const list1 = [
  {
    img_url_small: pic1,
    img_url: pic1a,
    title: "Topiax",
    sub_title: "Website UX & UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img_url_small: pic2,
    img_url: pic2a,
    title: "Cognife",
    sub_title: "Website UX & UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
const list2 = [
  {
    img_url_small: slice,
    img_url: pic3,
    title: "Chicken Slice",
    sub_title: "Meal Packaging Design",
    direction:"row-reverse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img_url_small: slice,
    img_url: chaps,
    title: "Chicken Slice",
    sub_title: "Meal Packaging Design",
    direction:"row-reverse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img_url_small: kidz,
    img_url: kidz1,
    title: "E-Kidz",
    sub_title: "Learner App UX & UI Design",
    direction:"row-reverse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img_url_small: locum,
    img_url: locum1,
    title: "Locumsbook",
    sub_title: "Learner App UX & UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function OurPort() {
  return (
    <Wrapper>
      {list1.map((item, i) => {
        return (
          <PortDiv
            key={i}
            img_url_small={item.img_url_small}
            img_url={item.img_url}
            title={item.title}
            description={item.description}
            sub_title={item.sub_title}
            direction=''
          />
        );
      })}
      <div className="middle">
        <img src={phone} alt="" />
        <img src={phone1} alt="" />
      </div>
      {list2.map((item, i) => {
        return (
          <PortDiv
            key={i}
            img_url_small={item.img_url_small}
            img_url={item.img_url}
            title={item.title}
            description={item.description}
            sub_title={item.sub_title}
            direction={item.direction}
          />
        );
      })}
    </Wrapper>
  );
}

export default OurPort;
