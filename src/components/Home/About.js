import React from 'react';
import styled from 'styled-components';
import Heading from '../../styled/Heading';
import Paragraph from '../../styled/Paragraph';
import { Link } from 'react-router-dom';
import {FiArrowUpRight} from 'react-icons/fi';

const Wrapper = styled.section`
padding:10% 20px;
@media(min-width:992px){
    display: flex;
    align-items: center;
    justify-content:space-between;
    .about-inner{
        width:55%;
    }
}
@media(min-width:1200px){
    padding:5% 8%;
}
    img{
        width:100%;
        display: block;
        max-width:450px;
        margin:0 auto;
    }
    h2{
        margin-bottom:20px;
        @media(min-width:992px){
            line-height:43px;
        }
        img{
                object-fit:contain;
                width:20px;
                margin:unset;
                display: unset;
                transform: translateY(6px);
            }
       
    }
    p{
            margin-bottom:10px;
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
    .about-image{
        @media(min-width:992px){
            width:40%;
        }
    }
`

function About() {
  return (
    <Wrapper>
        <div className="about-inner">
            <Heading textColor="rgba(83, 197, 138, 1)">We Love Being Creative, <br /> And Drinking <span>Jäger</span><img src="./images/bottle.png" alt="bottle" /></Heading>
            <Paragraph>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Paragraph>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Paragraph>
            <Link to="/about">About The Brand <FiArrowUpRight /></Link>
        </div>
        <img className='about-image' src="./images/3blocks.webp" alt="blocks loktion code" />
    </Wrapper>
  )
}

export default About;