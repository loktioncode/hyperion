import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import HipCard from "../../styled/HipCard";

const Wrapper = styled.section`
  padding: 10% 20px;
  text-align: left;
  @media (min-width: 1200px) {
    padding: 10% 8%;
  }
  h2 {
    margin-bottom: 30px;
    @media (min-width: 992px) {
      width: 50%;
    }
  }

  .top {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2{
        margin-bottom:0;
      }
      p {
        width: 50%;
      }
    }
  }
  .bottom {
    margin-top: 30px;
    @media (min-width: 768px) {
      display: flex;
      gap: 15px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    @media (min-width: 992px) {
      gap: 30px;
    }
    .hip-card {
      @media (min-width: 768px) {
        width: 43%;
        margin-bottom: 0;
      }
      @media (min-width: 1200px) {
        width: 40%;
      }
      @media (min-width: 1400px) {
        width: 41.5%;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const hips = [
  {
    link: "services",
    heading: "Development Solutions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: "code",
    bgColor: "#74C3C4",
  },
  {
    link: "services",
    heading: "Branding",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: "paint",
    bgColor: "#BD4393",
  },
  {
    link: "services",
    heading: "UI/UX Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: "design",
    bgColor: "#20A1D2",
  },
  {
    link: "services",
    heading: "Network & Security",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: "network",
    bgColor: "#E76713",
  },
];

function Hip() {
  return (
    <Wrapper>
      <div className="top">
        <Heading textColor="#20a1d2">
        Online Coding <br /> <span>Bootcamps</span>
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </div>
      <div className="bottom">
        {hips.map((item, i) => {
          return (
            <HipCard
              key={i}
              link={item.link}
              heading={item.heading}
              text={item.text}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Hip;
