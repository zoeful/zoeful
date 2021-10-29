import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Calendar from '../components/organisms/calendar';

const Wrap = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
  position: relative;
  background-color: #ccc;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  background-color: aqua;
  transition: all .2s;
  ${({className})=>{
    return className === 'active' ? 
      `
        position: absolute;
        top: 0;
      `
      : null;
  }}
`;

const SubTitle = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  background-color: orange;
  ${({className})=>{
    return className === 'active' ? 
      `
        position: absolute;
        bottom: 0;
        transition: all 2s;
      `
      : null;
  }}
`;

const Footer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gold;
`;

const Home: NextPage = () => {

  const [position, setPosition] = useState('');

  useEffect(()=>{
    console.log('load finish');
    setTimeout(()=>{
      setPosition('active');
    },2000);
  },[]);

  return (
    <>
      <Wrap>
        <Head>
          <title>Zoe's Daily Calendar</title>
          <meta name="description" content="Zoe's Portfolio" />
        </Head>

        <Main>
          <Title className={position}>This is Zoe's Daily Calendar</Title>

          <Calendar />

          <SubTitle className={position}>
            You can check the daily life of zoe after leaving the company
          </SubTitle>

        </Main>

        <Footer as="a" href="https://github.com/zoeful">
            Go to Zoeful GitHub
        </Footer>
      </Wrap>
    </>
  )
}

export default Home
