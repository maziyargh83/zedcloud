import { aria2 } from "@/lib/aria2";

export const getVersion = async () => {
  return await aria2.getVersion();
};
