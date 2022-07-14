import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/layout/Header";
import { Meta } from "../components/common/Meta";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthWrapper } from "../components/common/AuthWrapper";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Meta />
      <AuthWrapper>
        <div className="px-4 max-w-md mx-auto">
          <Header />
          <Component {...pageProps} />
        </div>
      </AuthWrapper>
    </QueryClientProvider>
  );
}

export default MyApp;
