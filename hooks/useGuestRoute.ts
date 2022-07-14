import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { isClient } from "../utils/isClient";

export const useGuestRoute = () => {
  const router = useRouter();
  const { data } = useQuery("currentUser");

  useEffect(() => {
    if (isClient && data) {
      router.push("/");
    }
  }, [data]);
};
