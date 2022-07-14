import { LogInDto } from "../types/dto/LogInDto";
import { RegisterDto } from "../types/dto/RegisterDto";
import { User } from "../types/User";
import { isClient } from "../utils/isClient";
import { axios } from "./axios";

export let token: string | null = null;

if (isClient) {
  token = localStorage.getItem("token");
}

export const updateToken = (newToken: string | null) => {
  token = newToken;
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
};

export const logIn = async (payload: LogInDto) => {
  const { data } = await axios.post<{ access_token: string }>(
    "auth/signin",
    payload
  );
  updateToken(data.access_token);
  return data;
};

export const logOut = () => {
  updateToken(null);
};

export const validate = async () => {
  if (!isClient) {
    return null;
  }

  if (!token) {
    return null;
  }

  try {
    return (await axios.get<User>("users/me")).data;
  } catch {
    return null;
  }
};

export const register = async (payload: RegisterDto) => {
  const { data } = await axios.post<{ access_token: string }>(
    "auth/signup",
    payload
  );
  updateToken(data.access_token);
  return data;
};
