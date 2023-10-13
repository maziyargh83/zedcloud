import { WebSocket } from "@/components/libaria2";
const isServer = true;
const host = isServer ? "aria2" : "localhost";
const aria2 = new WebSocket.Client({
  host,
  port: 6800,
  auth: {
    secret: "P3TERX",
  },
});
export { aria2 };
