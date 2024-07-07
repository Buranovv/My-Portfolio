import {  Button, Heading } from "@chakra-ui/react";
import MainButton from "../button/mainButton";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="container">
      <div>
        <Heading>Let`s Connect There</Heading>
        <MainButton
          rightIcon={<MdArrowOutward size={20} />}
          colorScheme="orange"
        >
          Hire me
        </MainButton>
        <Button colorScheme=""></Button>
      </div>
    </footer>
  );
};

export default Footer;
