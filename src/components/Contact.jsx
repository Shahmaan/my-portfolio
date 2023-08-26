import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: white
  border: none;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #433751;
  color: white;
  font-weight: 300;
  font-size: 20px;
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
  flex: 1;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Get In Touch With Me</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Textarea placeholder="Write you message here" rows={10} />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Contact;
