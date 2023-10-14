"use server";
import { aria2Http } from "@/lib/aria2";

export const getVersion = async () => {
  return await aria2Http.getVersion();
};
