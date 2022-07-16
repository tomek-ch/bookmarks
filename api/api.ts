import { Bookmark } from "../types/Bookmark";
import { BookmarkDto } from "../types/dto/BookmarkDto";
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

export const getBookmarks = async () => {
  const { data } = await axios.get<Bookmark[]>("bookmarks");
  return data;
};

export const createBookmark = async (payload: BookmarkDto) => {
  const { data } = await axios.post<Bookmark>("bookmarks", payload);
  return data;
};

export const removeBookmark = (id: number) => {
  return axios.delete(`bookmarks/${id}`);
};
