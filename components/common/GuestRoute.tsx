import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useQuery } from "react-query";
import { validate } from "../../api/api";
import { SplashScreen } from "./SplashScreen";

interface PrivateRouteProps {
  children: ReactNode;
}

export const GuestRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();
  const { isLoading, data } = useQuery("currentUser", validate);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (data) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};
