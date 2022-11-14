import React from "react";
import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import { navLinks } from "../../constants/navLinks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const NavMenu = () => {
  const router = useRouter();

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
        data-testid="nav-menu"
      >
        <HamburgerIcon />
      </MenuButton>
      <MenuList alignItems={"center"}>
        {navLinks.map(({title, url}) => {
          return (
            <MenuItem
              onClick={() => {
                router.push(url);
              }}
              key={title}
              data-testid="nav-link"
            >
              {title}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
