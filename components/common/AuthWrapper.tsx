import { ReactNode } from "react";
import { useQuery } from "react-query";
import { validate } from "../../api/api";

interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { isLoading } = useQuery("currentUser", validate);

  if (isLoading) {
    return <>Loading...</>;
  }

  return <>{children}</>;
};
