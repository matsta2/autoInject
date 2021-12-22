import "./App.css";

import tw from "twin.macro";
import { Part } from "./components/pages/Part";
import Footer from "./components/Footer";

const AppContainer = tw.div`
  w-full
  max-w-full
  flex
  flex-col
  items-center
  justify-center
  pt-6
  pb-10
  pl-10
  pr-10
`;

const Title = tw.h1`
  text-2xl
  font-semibold
`;

function Apps() {
  return (
    <AppContainer>
      <Title>Prieinamos detalės: </Title>
      <Part />
      
    </AppContainer>
  );
}

export default Apps;