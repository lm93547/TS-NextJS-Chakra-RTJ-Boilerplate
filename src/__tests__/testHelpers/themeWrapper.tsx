import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

type Props = {
    children: any
}

export const ThemeWrapper = ({ children }: Props) => (
  <ChakraProvider>{children}</ChakraProvider>
);