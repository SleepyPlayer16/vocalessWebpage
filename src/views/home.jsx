import React, { useRef, useState, useEffect   } from 'react';
import styled from 'styled-components'
import logo from '../assets/images/vocalessLogoHD.png'
import CusButton from '../components/CusButton'
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import hoverSound from '../assets/sounds/swoosh.mp3'
import characterFile from '../assets/data/characterData.json'
import ReactPlayer from 'react-player'
import Headline from '../assets/images/Headline.png'


export default function Home() {
  const [hoveredRight, setHoveredRight] = useState(false);
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  const images = [
    {"thumbnail": "https://picsum.photos/id/1018/250/150/"}
  ]

  const audioRef = useRef(null);

  useEffect(() => {
    function updateVisibleCount() {
      const width = window.innerWidth;
      if (width <= 600) setVisibleCount(2);
      else if (width <= 800) setVisibleCount(3);
      else if (width <= 1000) setVisibleCount(4);
      else setVisibleCount(5);
    }
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxStartIndex = Math.max(0, characterFile.length - visibleCount);

  const handleLeftClick = () => {
    setStartIndex(i => Math.max(0, i - 1));
  };

  const handleRightClick = () => {
    setStartIndex(i => Math.min(maxStartIndex, i + 1));
  };

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <Container>
      <audio ref={audioRef} src={hoverSound} preload="auto" />
      <Logo src={logo}/>
      <ButtonContainers>
        <CusButton text={'News'} page={"#"}/>
        <CusButton text={'Demo'} page={"https://sleepyplayer16.itch.io/vocaless"}/>
        <CusButton text={'Discord'} page={"https://discord.gg/ncFxVwFMCW"}/>
        <CusButton text={'Contact'} page={"#"}/>
      </ButtonContainers>
      <CarouselContainer>
        <CarouselInnerContainer>
            <BiSolidLeftArrow
              style={{
                outline: 'none',
                userSelect: 'none',
                fontSize: hoveredLeft ? '2.5em' : '2em',
                transition: 'font-size 0.2s ease-in-out',
                cursor: 'pointer'
              }}
              onClick={handleLeftClick}
              onMouseEnter={() => {
                setHoveredLeft(true);
                handleMouseEnter();
              }}
              onMouseLeave={() => setHoveredLeft(false)}
            />
            {characterFile.slice(startIndex, startIndex + visibleCount).map((char) => (
                  <CarouselImage primary={char.primaryColor} onMouseEnter={handleMouseEnter}>
                    <CarouselInnerImage src={char.imageUrl} alt={char.name} offset={char.offset} offsetX={char.offsetX}/>
                  </CarouselImage>
                ))}
            <BiSolidRightArrow
              style={{
                outline: 'none',
                userSelect: 'none',
                fontSize: hoveredRight ? '2.5em' : '2em',
                transition: 'font-size 0.2s ease-in-out',
                cursor: 'pointer'
              }}
              onClick={handleRightClick}
              onMouseEnter={() => {
                setHoveredRight(true);
                handleMouseEnter();
              }}
              onMouseLeave={() => setHoveredRight(false)}
            />
        </CarouselInnerContainer >
      </CarouselContainer>
      <HomePageContainer>
        <HeadlineImg src={Headline}/>
        <ReactPlayer src='https://youtu.be/SUOFmMD1teU' width={480} height={270}/>
      </HomePageContainer>
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

const HeadlineImg = styled.img`
  width: 90%;
  margin-bottom: 32px;
`

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  align-items: center;
`

const ButtonContainers = styled.div`
  background-color: #222B2C;
  width: 100%;
  height: 70px;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`

const CarouselContainer = styled.div`
  background-color: #222B2C;
  margin-top: 30px;
  clip-path: polygon(
    20px 0%,
    calc(100% - 20px) 0%,
    100% 50%,
    calc(100% - 20px) 100%,
    20px 100%,
    0% 50%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 70%;
  height: 8%;

`;

const CarouselInnerContainer = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const CarouselImage = styled.div`
  &:hover {
    transform: scale(1.1);
  }

  cursor: pointer;
  flex: 1 1 0;
  width: 116px;
  height: 40px;
  background-color: ${props => (props.primary ? props.primary : 'gray')};
  padding: 4px;
  margin-left: 1%;
  margin-right: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1200px) {
    &:nth-of-type(n+6) {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    &:nth-of-type(n+5) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    &:nth-of-type(n+4) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    &:nth-of-type(n+3) {
      display: none;
    }
  }
`;

const CarouselInnerImage = styled.img`
  height: 250px;
  object-fit: contain;
  pointer-events: none; 
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  transform: translateX(${props => props.offsetX || 0}px) translateY(${props => props.offset || 0}px);

`;

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