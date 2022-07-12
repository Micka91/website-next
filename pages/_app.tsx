// GLOBAL STYLE
import "../styles/main.scss";
// TYPES
import type { AppProps } from "next/app";
// COMPONENTS
import Layout from "./../components/Layout/Layout";
import DrawerContextProvider from "./../context/DrawerContext";
// TRANSLATION
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DrawerContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DrawerContextProvider>
  );
}

export default appWithTranslation(MyApp);
