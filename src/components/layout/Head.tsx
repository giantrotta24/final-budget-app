import Head from "next/head";

const HeadComponent: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Final Budget</title>
      <meta
        name="description"
        content="The last budget app you'll ever need to use"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
