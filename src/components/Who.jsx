import React from "react";
import { styled } from "styled-components";
import SpaceHelmetCanvas from "./Canvas/SpaceHelmetCanvas";

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
  display: flex;
  align-items: center;
  
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
  font-weight: 400;
`;

const Subtitle = styled.h4`
  font-size: 30px;
`;

const Desc = styled.p`
  color: lightgray;
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

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <SpaceHelmetCanvas />
        </Left>
        <Right>
          <Title>Who Am I?</Title>
          {/*<Subtitle>Data Scientsit & Analyst</Subtitle>*/}
          <Desc>
            Greetings, fellow explorer! I'm Nawaz, a passionate Data Scientist
            on a journey to decode the intricacies of data and turn them into
            meaningful narratives. With a cup of curiosity and a spoonful of
            creativity, I'm here to bridge the gap between complex datasets and
            impactful insights.
          </Desc>
          <Desc>
            <b>The Explorer's Path</b>
            <br />
            As a recent graduate with a degree in Data Science, I've embarked on
            a quest to navigate the ever-evolving landscape of data science. My
            journey began with a fascination for patterns and an unrelenting
            desire to understand the stories hidden within numbers.
          </Desc>
          <Desc>
            <b>Unraveling the Data Tapestry</b>
            <br />
            From crafting predictive models that peer into the future, to
            designing intuitive data visualizations that tell tales at a glance,
            I've embraced the art of data science as both a passion and a
            profession. With a toolkit that includes Python, SQL, R, Deep
            Learning, Pandas, Numpy, and much more, I'm committed to uncovering
            insights that drive smarter decisions.
          </Desc>
          <Desc>
            <b>Beyond the Screen</b>
            <br />
            But data doesn't define me entirely. When I'm not immersed in the
            world of algorithms and analytics, you might find me going on hikes,
            reading, or playing sports. Because while data illuminates the path,
            life's experiences add the colors that make the journey truly
            vibrant.
          </Desc>
          <Desc>
            <b>Join Me on this Odyssey</b>
            <br />
            Whether you're a fellow data enthusiast, a curious mind, or someone
            seeking to transform data into actionable intelligence, I invite you
            to join me on this odyssey. Let's embark together on a journey that
            turns raw data into a symphony of insights, curiosity into clarity,
            and numbers into narratives.
          </Desc>
          <Button>Learn More</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
