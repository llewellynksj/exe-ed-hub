import { HStack, Image, Text } from "@chakra-ui/react";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/exeedhublogo.webp";

const NavBar = () => {
  return (
    <HStack className={styles.NavBar}>
      <Image src={logo} width="60" height="20" objectFit="contain" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
