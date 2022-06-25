import "../styles/main.scss";
import type { AppProps } from "next/app";
import Layout from "./../components/Layout/Layout";
import LanguageProvider from "../context/LanguageContext/LanguageContext";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default appWithTranslation(MyApp);
