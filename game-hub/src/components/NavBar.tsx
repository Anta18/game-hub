import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamestorelogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="80px" borderRadius="full" py="2" px="2" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
