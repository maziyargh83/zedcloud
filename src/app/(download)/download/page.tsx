import { DownloadHeader } from "@/components/download/DownloadHeader";
import { getVersion } from "@/lib/api";

export default async function Home() {
  return (
    <div>
      <DownloadHeader addUrl={getVersion} />
    </div>
  );
}
