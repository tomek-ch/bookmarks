import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { AuthContextProvider } from "../context/AuthContext";
import { Meta } from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Meta />
      <div className="max-w-md mx-auto">
        <Header />
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;
