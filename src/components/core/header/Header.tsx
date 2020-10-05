import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import React, { useState } from "react";
import "./Header.scss";
//TODO: will be in the separate file
const list = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact Us",
    url: "/contact_us",
  },
];
const MenuItem = (props: any) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {props.children}
  </Text>
);
const Header = (props: any) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      background="radial-gradient(circle, #5c27fb 0%, #7047f7 100%)"
      {...props}
    >
      <Flex align="center" mr={10}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Stock Analytica
        </Heading>
      </Flex>
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItem>Docs</MenuItem>
        <MenuItem>Examples</MenuItem>
        <MenuItem>Blog</MenuItem>
      </Box>
    </Flex>
  );
};

export default Header;
