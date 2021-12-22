import "./App.css";

import tw from "twin.macro";
import { ServicesVisitor } from "./components/pages/ServicesVisitor";
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

function AppServiceVisitor() {
  return (
    <AppContainer>
      <Title>Mūsų servisai: </Title>
      <ServicesVisitor />
      
    </AppContainer>
  );
}

export default AppServiceVisitor;