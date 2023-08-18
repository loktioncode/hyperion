import React from 'react';
import styled from 'styled-components';
import Heading from '../../styled/Heading';
import GreatDiv from '../../styled/GreatDiv';
import pic1 from '../../assets/doing1.webp'
import pic2 from '../../assets/doing2.webp'
import pic3 from '../../assets/doing3.webp'
import pic4 from '../../assets/doing4.webp'

const Wrapper = styled.section`
    padding:0 20px;
    @media(min-width:992px){
        padding:5%;
    }
    @media(min-width:1200px){
        padding:5% 10%;
    }
    h2{
        text-align:center;
    }
    img{
        width:100%;
        @media(min-width:992px){
                width:45%;
            }
            @media(min-width:1200px){
                width:55%;
            }
    }
`

const list = [
    {
        title: 'Mobile App Design',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: pic1, 
    },
    {
        title: 'Branding',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: pic2, 
    },
    {
        title: 'Software Development',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: pic3, 
    },
    {
        title: 'Systems Networking & Security',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: pic4,  
    },
]

function Great() {
  return (
    <Wrapper>
        <Heading>What We’re Great At Doing</Heading>
        {list.map((item, i)=>{
            return <GreatDiv 
            key={i}
            title={item.title}
            text1={item.text1}
            text2={item.text2}
            image={item.image} 
            />
        })}
    </Wrapper>
  )
}

export default Great