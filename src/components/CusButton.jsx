import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import hoverSound from '../assets/sounds/buttonSelect.mp3'

const choppyScale = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1.05); }
`;

export default function ButtonWithSound({text, page}) {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // restart if hovered again quickly
      audioRef.current.play();
    }
  };

  const openPage = () => {
    window.open(page, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <audio ref={audioRef} src={hoverSound} preload="auto" />
      <CustButton onClick={openPage} onMouseEnter={handleMouseEnter}>
        <BtnText>{text}</BtnText>
      </CustButton>
    </>
  );
}

const CustButton = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  width: 15%;
  height: 40px;
  background-image: linear-gradient(#FFEB99, #FFD83A, #F0803B,#FFCC3F);
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  animation: none;
  
  &:hover {
    background-image: linear-gradient(#DFFFFF, #5ECFFF, #2889F8, #5ECFFF);
    animation: ${choppyScale} 0.3s steps(2, end) forwards;
  }
  @media (max-width: 800px) {
    height: 30px;
  }
`;

const BtnText = styled.text`
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow:
    1px 1px 0px #000,
    -1px 1px 0px #000,
    -1px -1px 0 #000,
    1px -1px 0 #000;
  @media (max-width: 800px) {
    font-size: 10px;
    text-shadow:
      0.4px 0.4px 0px #000,
      -0.4px 0.4px 0px #000,
      -0.4px -0.4px 0 #000,
      0.4px -0.4px 0 #000;  
  }
`;