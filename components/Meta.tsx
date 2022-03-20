import Head from "next/head";

interface HeadProps {
  title?: string;
  description?: string;
}

export const Meta = ({
  title = "Home",
  description = "Manage all your bookmarks in one place",
}: HeadProps) => {
  return (
    <Head>
      <title>{title} | Bookmarks</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};
