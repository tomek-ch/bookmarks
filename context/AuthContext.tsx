import { createContext, useContext, ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

type AuthContext = ReturnType<typeof useAuth>;
const Context = createContext({} as AuthContext);

interface ContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  return <Context.Provider value={useAuth()}>{children}</Context.Provider>;
};

export const useAuthContext = () => useContext(Context);
