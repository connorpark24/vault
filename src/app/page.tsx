import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";

import { resources } from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="p-6 h-20 w-screen border-b border-neutral-300 flex items-center justify-between fixed top-0 bg-white z-10">
        <h1 className="tracking-tighter text-3xl font-medium">Vault</h1>
        <div className="w-96">
          <Input type="text" placeholder="Search for domain..." />
        </div>
      </div>

      <div className="flex flex-row w-screen mt-20">
        <Sidebar />
        <div className="grow flex flex-col w-full overflow-scroll p-4 divide-y">
          {resources.map((domain) => (
            <ResourceCard key={domain} name={domain} />
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
}

function ResourceCard({ name }: { name: string }) {
  return (
    <div className="p-4 h-48 w-full rounded-sm hover:bg-neutral-100 hover:cursor-pointer tracking-tight">
      <div>{name}</div>
    </div>
  );
}
