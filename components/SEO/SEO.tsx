import Head from "next/head";
import { useRouter } from "next/router";

interface IProps {
  title: string;
  description: string;
  type: string;
}

const SEO = ({ title, description, type }: IProps) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      {/* GA */}
      <meta
        name="google-site-verification"
        content="GzV4nLIKcZn-yTe6lD2sxVA7H2-uL2Df7GZdm_zsxXE"
      />
      {/* SEO */}
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta
        property="og:image"
        content="https://mickaelchristine.fr/images/logo/teamdoc.png"
      />
      <meta property="og:url" content="https://mickaelchristine.fr" />
      <meta property="og:locale" content={router.locale} />
      <meta property="og:site_name" content="Team'doc" />
      <meta property="og:description" content={description} />
      {/* SOCIAL MEDIA */}
      <meta name="twitter:site" content="@team__doc" />
      <meta name="twitter:card" content="summary_large_image" />
      {router.locale === "en" ? (
        <>
          <link
            rel="canonical"
            href={`https://mickaelchristine.fr${router.pathname}/${router.locale}`}
          />
          <link
            rel="alternate"
            href={`https://mickaelchristine.fr${router.pathname}`}
            hrefLang="fr"
          />
        </>
      ) : (
        <>
          <link
            rel="canonical"
            href={`https://mickaelchristine.fr${router.pathname}`}
          />
          <link
            rel="alternate"
            href={`https://mickaelchristine.fr/en${router.pathname}`}
            hrefLang="en"
          />
        </>
      )}
      <link rel="icon" href="/favicon.ico" />

      <script
        id="cookiesecureJs"
        src="https://cdn.cookie-secure.com/js?k=d1e4b8f0b9ab8fee167ba71f0ef25e9b"
        type="text/javascript"
        async
      ></script>
    </Head>
  );
};

export default SEO;
