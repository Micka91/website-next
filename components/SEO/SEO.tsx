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
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="messagerie instantanée,messagerie sécurisée de santé,messagerie,instantanée,sécurisée,santé,professions médicales, assistant médical"
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta
        property="og:image"
        content="https://teamdoc.fr/images/logo/teamdoc.png"
      />
      <meta property="og:url" content="https://teamdoc.fr" />
      <meta property="og:locale" content={router.locale} />
      <meta property="og:site_name" content="Team'doc" />
      <meta property="og:description" content={description} />
      {/* SOCIAL MEDIA */}
      <meta name="twitter:site" content="@team__doc" />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="canonical" href={`https://teamdoc.fr${router.pathname}`} />
      <link
        rel="alternate"
        href={`https://teamdoc.eu${router.pathname}`}
        hrefLang="en"
      />
      <link rel="icon" href="/favicon.ico" />

      <script
        id="cookiesecureJs"
        src="https://cdn.cookie-secure.com/js?k=d1e4b8f0b9ab8fee167ba71f0ef25e9b"
        type="text/javascript"
        async
      ></script>
      <script
        type="text/javascript"
        src="https://brain.plezi.co/api/v1/analytics?tenant=492e6f40-06bb-49a5-98ef-87b2a1ac4ba4&tw=502bf6b8-34d7-403b-a863-41b688a8fabc"
        async
      ></script>
      <script
        type="text/javascript"
        src="https://app.mailjet.com/statics/js/iframeResizer.min.js"
        async
      ></script>
      <script
        type="text/javascript"
        src="https://app.mailjet.com/pas-nc-embedded-v1.js"
        async
      ></script>
      <script
        async
        src="https://tag.clearbitscripts.com/v1/pk_e221f9a9f853028aa9b6f3229d8cc8e5/tags.js"
        referrerPolicy="strict-origin-when-cross-origin"
      ></script>
    </Head>
  );
};

export default SEO;
