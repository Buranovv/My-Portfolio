import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
    //   "@font-face": {
    //     // font: {
    //     //   family: "LufgaReg",
    //     //   weight: 400,
    //     //   style: "normal",
    //     // },
    //     fontFamily: "LufgaReg",
    //     fontWeight: 400,
    //     fontStyle: "normal",
    //     src: "url(./assets/fonts/LufgaRegular.ttf)",
    //   },

      "*": {
        padding: 0,
        margin: 0,
      },

      "*::after": {
        boxSizing: "border-box",
      },
      "*::before": {
        boxSizing: "border-box",
      },

      a: {
        textDecoration: "none",
        display: "block",
      },
      li: {
        listStyle: "none",
      },

      ".container": {
        maxWidth: "1300px",
        margin: "0 auto",
      },
      
    },
  },
};

export default extendTheme(theme);
