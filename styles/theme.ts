// 1. Import the extendTheme function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  tab: {
    500: "#E53E3E",
  },
};

const fonts = {
  heading: `'Dosis', sans-serif`,
};

export const theme = extendTheme({ colors, fonts, config });
