import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Stack,
  HStack,
} from "@chakra-ui/react";
import NavMenu from "../NavMenu";
import { navLinks } from "../../constants/navLinks";
import { NextRouter, useRouter } from "next/router";
import { GoGist } from "react-icons/go";

const NavLink = ({
  children,
  href,
  router,
}: {
  children: ReactNode;
  href: string;
  router: NextRouter;
}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    onClick={() => {
      router.push(href);
    }}
    data-testid="nav-link"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const router = useRouter();

  return (
    <Box w="100%" h={16} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex
          data-testid="route-home"
          color="red.500"
          cursor="pointer"
          onClick={() => {
            router.push("/");
          }}
          fontSize="2xl"
        >
          Logo
        </Flex>
        <Flex alignItems={"center"}>
          <Flex alignItems={"center"} mr={4}>
            <Stack direction={"row"} spacing={4}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {navLinks.map(({url, title}, i) => (
                  <NavLink router={router} href={url} key={title}>
                    {title}
                  </NavLink>
                ))}
              </HStack>
            </Stack>
          </Flex>
          <Box alignItems="center" display={{ md: "none" }}>
            <NavMenu />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
