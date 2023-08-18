import React from 'react';
import styled from 'styled-components';
import Heading from '../../styled/Heading';
import GreatDiv from '../../styled/GreatDiv';

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
        title: 'We set you up for success',
        text1: 'Take advantage of career development and networking opportunities in the HyperionDev Graduate Program.',
        text2: 'Expert on-demand feedback will get you writing efficient, error-free code, and keep you from getting stuck.',
        image: 'https://www.hyperiondev.com/static/images/map.png', 
    },
  
]

function Great() {
  return (
    <Wrapper>
       <div style={{paddingBottom: '20px'}}>
       <Heading textColor={''}>What We’re Great At Doing</Heading>

       </div>
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