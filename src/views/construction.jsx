import React from 'react';
import styled from 'styled-components'
import logo from '../assets/images/vocalessLogoHD.png'
import Workaru from '../assets/images/workerKaru.png'

export default function Construction() {

  return (
    <Container>
      <Logo src={logo}/>
      <WorkaruImg src={Workaru}/>
      <Txt>Under construction</Txt>
    </Container>
  )
}

const Container = styled.div`
  background-image: linear-gradient(to right, #FF9233,#FFC933, #FFF292, #FFC933, #FF9233);
  width: 80%;
  height: 913px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  position: relative;
  overflow: visible;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 10px;
  border: 3px solid #4A0B3A;
  box-shadow: 4px 13px 11px 3px rgba(0,0,0,0.51);
  -webkit-box-shadow: 4px 13px 11px 3px rgba(0,0,0,0.51);
  -moz-box-shadow: 4px 13px 11px 3px rgba(0,0,0,0.51);
`;

const Txt = styled.text`
  justify-self: center;
  align-self: center;
  color: white;
  font-size: 72px;
  text-shadow:
    2px 2px 0px #000,
    -2px 2px 0px #000,
    -2px -2px 0 #000,
    2px -2px 0 #000;
  @media (max-width: 800px) {
    font-size: 32px;
  text-shadow:
    1px 1px 0px #000,
    -1px 1px 0px #000,
    -1px -1px 0 #000,
    1px -1px 0 #000;
  }

`

const WorkaruImg = styled.img`
  margin-top: 200px;
  justify-self: center;
  align-self: center;
`

const Logo = styled.img`
  width: 352px;
  height: 73px;
  position: absolute;
  top: -36.5px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 800px) {
    top: -18.25px;
    width: 175px;
    height: 36px;
  }
`;