import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";

import { resources, Resource } from "@/lib/data";

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
        <div className="grow grid grid-cols-2 w-full overflow-scroll p-4 gap-2 ml-72">
          {resources.map((resource) => (
            <ResourceCard key={resource.name} resource={resource} />
          ))}
        </div>
      </div>
    </>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={`/resources/${resource.id}`}
      className="p-4 h-48 w-full rounded-sm hover:bg-neutral-100 hover:cursor-pointer tracking-tight"
    >
      <p>{resource.name}</p>
    </a>
  );
}
