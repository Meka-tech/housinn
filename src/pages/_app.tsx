import type { AppProps } from "next/app";
import { Global } from "@emotion/react";

import { global } from "../styles/global-style";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
