import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/gamestorelogo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="80px" borderRadius="full" py="2" px="2" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
