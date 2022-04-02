import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/layout/Header";
import { AuthContextProvider } from "../context/AuthContext";
import { Meta } from "../components/common/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Meta />
      <div className="px-4 max-w-md mx-auto">
        <Header />
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;
