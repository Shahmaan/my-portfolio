import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
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
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>{/* 3d model */}</Left>
        <Right>
          <Title>Who Am I?</Title>
          {/*<Subtitle>Data Scientsit & Analyst</Subtitle>*/}
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
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
