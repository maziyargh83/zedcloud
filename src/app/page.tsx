import { getVersion } from "@/lib/api";

export default async function Home() {
  getVersion()
    .then((e) => console.log({ e }))
    .catch(console.log);

  return <div></div>;
}
