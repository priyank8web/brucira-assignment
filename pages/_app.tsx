import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    font-family: 'Mukta', sans-serif !important;
  }
`;
const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};
const theme = {
  colors: {
    primary: "#505ECE",
    primaryLight: "#4051d0",
    black: "#00000A",
  },
  device: {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
  },
  maxWidth: "1270px",
  fonts: ["Mukta", "Poppins"],
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
