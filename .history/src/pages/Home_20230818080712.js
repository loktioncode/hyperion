import React from 'react'
import Banner from '../components/Home/Banner'
import Hip from '../components/Home/Hip'
import TeamWork from '../components/Home/TeamWork'
import Great from '../components/Home/About'
import Who from '../components/Home/Who'

import Contact from '../components/Home/Contact';
import styled from 'styled-components';

const Space = styled.div`
  @media(min-width:992px){
    padding:150px 0;
  }
`


function Home() {
  return (
    <>
      <Banner />
      <Hip />
      <TeamWork />
      <Great />
      <Who />
      <Contact />
      <Space />
    </>
  )
}

export default Home