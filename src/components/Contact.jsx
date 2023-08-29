import React from "react";
import { styled } from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Helmet from "./Helmet";

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
  const ref = useRef();
  const [succsess, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hpr7b8o",
        "template_irovmwv",
        ref.current,
        "Zg6il4RIHKU7D4MCd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Get In Touch With Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <Textarea placeholder="Message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {succsess &&
              "Your message has been sent. I'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Canvas>
            <Stage environment={"night"} intensity={2}>
              <Helmet />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
