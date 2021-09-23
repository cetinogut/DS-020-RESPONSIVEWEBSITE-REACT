import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//#region Style
const Container = styled.div
`
  height : 100vh;
  overflow: hidden;
  position: relative;
  
`
const ShapeBasics = css`
  width: 100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  z-index: -1;  
`;

const IntroShape = styled.div`
  ${ShapeBasics}
  clip-path: polygon(61.5% 0, 100% 0%, 100% 100%, 48.2% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${ShapeBasics}
  clip-path: polygon(0 0, 48.2% 0, 36% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${ShapeBasics}
  clip-path: polygon(0 0, 36% 0, 49% 100%, 0 100%);
  background-color: pink;
`;

const PriceShape = styled.div`
  ${ShapeBasics}
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 67% 100%);
  background-color: crimson;
`;
//#endregion style

const App = () => {
  const smallScreen = window.screen.width <=480 ? true : false;
  return (
    <>
    <Container>
      <Navbar/>
      <Intro />
      <IntroShape/>
    </Container>
    <Container>
      <Feature/>
      <FeatureShape/>
    </Container>
    <Container>
      <Service/>
      { !smallScreen && <ServiceShape/>}
    </Container>
    <Container>
      <Price/>
      <PriceShape/>
    </Container>
    <Container>
      <Contact/>
      <Footer/>
    </Container>
    </>
  )
  
};

export default App;
