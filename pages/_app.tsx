import "../styles/globals.css";
import SideMenu from "../components/sideMenu";
import type { AppProps } from "next/app";
import { Container } from "../styles/main";
import ContextProvider from "../context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Container>
        <SideMenu />
        <Component {...pageProps} />
      </Container>
    </ContextProvider>
  );
}
