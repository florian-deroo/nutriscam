import Background from "@/components/containers/Background";
import PopUpContainer from "@/components/containers/PopUpContainer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nutriscam</title>
      </Head>
      <Background>
        <PopUpContainer>
          <Component {...pageProps} />
        </PopUpContainer>
      </Background>
    </>
  );
}
