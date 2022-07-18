// REACT
import { useEffect } from "react";
// GLOBAL STYLE
import "../styles/main.scss";
// TYPES
import type { AppProps } from "next/app";
// COMPONENTS
import Layout from "./../components/Layout/Layout";
// CONTEXT
import DrawerContextProvider from "./../context/DrawerContext";
import MenuContextProvider from "../context/MenuContext";
// TRANSLATION
import { appWithTranslation } from "next-i18next";
// ANALYTICS
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../utils/firebase";
// NEXT
import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  // NEXT HOOKS
  const routers = useRouter();

  // TRACK VIEW IN GOOGLE ANALYTICS
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const analytics = getAnalytics(app);

      const log = (url: string) => {
        logEvent(analytics, "screen_view");
      };

      routers.events.on("routeChangeComplete", log);
      //For First Page
      log(window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off("routeChangeComplete", log);
      };
    }
  }, [routers?.events]);

  return (
    <>
      {/* MARKETING */}
      <Script
        id="document"
        src="https://grow.clearbitjs.com/api/pixel.js?k=pk_278ad47e2b17efadcf0c272d11d07077&v="
        onLoad={() => {
          (d: any, u: any, h: any, s: any) => {
            h = d.getElementsByTagName("head")[0];
            s = d.createElement("script");
            s.async = 1;
            s.src = u + new Date().getTime();
            h.appendChild(s);
          };
        }}
      />
      {/* RESPONSIV MENU */}
      <MenuContextProvider>
        {/* DOWNLOAD DRAWER */}
        <DrawerContextProvider>
          {/* APP */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DrawerContextProvider>
      </MenuContextProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
