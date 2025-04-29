import { resources, Resource } from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-row w-screen mt-20">
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
