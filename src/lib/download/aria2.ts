import { WebSocket, Http } from "@/components/libaria2";
const aria2Socket = new WebSocket.Client({
  host: "localhost",

  port: 6800,
  auth: {
    secret: "P3TERX",
  },
});
const aria2Http = new Http.Client({
  host: "aria2",

  port: 6800,
  auth: {
    secret: "P3TERX",
  },
});
export { aria2Socket, aria2Http };
