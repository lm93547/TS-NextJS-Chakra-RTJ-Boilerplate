import {
  Box,
  chakra,
  Code,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ReactNode } from "react";
import { INITIALS, NAME } from "../../constants/userInfo";
import { socialLinks } from "../../constants/navLinks";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={4}
      h={4}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      target="_blank"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const socialIcons = [<FaGithub key={0} />, <FaLinkedinIn key={1} />];
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position="relative"
      bottom="0"
      w="100%"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={2}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          {socialLinks.map((link, i) => {
            return (
              <SocialButton key={link.title} label={link.title} href={link.url}>
                {socialIcons[i]}
              </SocialButton>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
