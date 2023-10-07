import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { React } from "react";

//  function for logo in footer
const Logo = () => {
  return (
    <>
      <Box width="17%">
        <Image src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"></Image>
      </Box>
    </>
  );
};

const Footer = () => {
  return (
    <Box bgColor={"rgb(3, 3, 39)"} marginTop={"20px"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        {/*  above logo function call here */}
        <Logo />
        {/*   details  and contact */}
        <Stack direction={"row"} spacing={6} color="white">
          <Box as="a" href={"#"}>
            Home
          </Box>
          <Box as="a" href={"#"}>
            About
          </Box>
          <Box as="a" href={"#"}>
            Contact US
          </Box>
          <Box as="a" href={"#"}>
            Blog
          </Box>
        </Stack>
        {/* address of the company */}
        <Text color="grey">9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>

        {/* socia media account */}
        <Flex color={"white"} gap={"20px"} fontSize={"25px"}>
          <FaTwitter />
          <FaInstagram />
        </Flex>
        <Text color="grey">© 2022. Ntwist Inc.</Text>
      </Container>
    </Box>
  );
};
export default Footer;
