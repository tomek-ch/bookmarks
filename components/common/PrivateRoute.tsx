import { useRouter } from "next/router";
import { ElementType, ReactNode } from "react";
import { useQuery } from "react-query";
import { validate } from "../../api/api";
import { SplashScreen } from "./SplashScreen";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();
  const { isLoading, data } = useQuery("currentUser", validate);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (data) {
    return <>{children}</>;
  }

  router.push("/log-in");
  return null;
};
