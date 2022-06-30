import Head from "next/head";

interface IProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: IProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
