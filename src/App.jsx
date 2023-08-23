import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
