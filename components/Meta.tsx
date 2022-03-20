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
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};
