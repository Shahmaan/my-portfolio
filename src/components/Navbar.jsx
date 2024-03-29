import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px, 0px;
  padding-top: 15px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: color 0.1s ease; /* Adding a smooth transition effect */

  &:hover {
    color: lightGray;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #433751;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: lightGray;
    color: black;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo2.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About Me</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
