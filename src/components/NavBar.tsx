import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/exeedhublogo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} width="60" height="20" objectFit="contain" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
