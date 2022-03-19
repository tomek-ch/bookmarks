import { useState } from "react";
import { User } from "../types/User";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signOut = () => {
    setCurrentUser(null);
  };

  const signIn = () => {};
  const signUp = () => {};

  return { currentUser, signIn, signUp, signOut };
};
