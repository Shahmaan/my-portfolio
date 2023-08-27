import styled from "styled-components";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";
import ExperienceEducation from "./components/ExperienceEducation";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  /* background-size: cover; */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Projects />
      <ExperienceEducation />
      <Contact />
    </Container>
  );
}

export default App;
