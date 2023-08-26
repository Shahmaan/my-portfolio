import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Subtitle = styled.h4`
  font-size: 30px;
`;

const Desc = styled.p`
  color: lightgray;
`;

const TagLine = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 2px;
  width: 15px;
`;

const Quote = styled.p`
  color: #ff0000;
`;

const Button = styled.button`
  background-color: #433751;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: lightGray;
    color: black;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 800px;
  height: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Nawaz A.Rahman</Title>
          <Subtitle>Data Scientsit & Analyst</Subtitle>
          <Desc>
            Welcome to my corner of the data-driven universe! I'm a passionate
            and curious data scientist on a mission to unravel the stories
            hidden within the numbers. Armed with a deep love for
            problem-solving and an insatiable curiosity, I embarked on this
            exhilarating journey into the world of data science.
          </Desc>
          <TagLine>
            <Line src="./img/line.png" />
            <Quote>Where Data Meets Discovery</Quote>
          </TagLine>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="./img/astronaut.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
