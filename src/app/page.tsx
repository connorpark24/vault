import { resources, Resource } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col  items-center gap-4 p-4">
      {resources.map((resource) => (
        <ResourceCard key={resource.name} resource={resource} />
      ))}
    </div>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={`/resources/${resource.id}`}
      className="p-4 aspect-video w-3/5 rounded-sm bg-muted/50"
    >
      <p>{resource.name}</p>
    </a>
  );
}
