import { domains } from "@/lib/data";

export default function Sidebar() {
  return (
    <div className="w-96 h-screen border-r border-neutral-300 p-6 gap-y-1 flex flex-col sticky top-20 overflow-y-scroll overflow-x-hidden">
      <p className="font-medium tracking-tight">Domains</p>
      {domains.map((domain) => (
        <div key={domain} className="text-sm ">
          {domain}
        </div>
      ))}
    </div>
  );
}
