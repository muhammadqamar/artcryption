import type { AppProps } from "next/app";

// styles

import "../assets/scss/globalStyles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
