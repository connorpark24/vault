export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div className="p-4">
      <div>My Post: {slug}</div>
      <div>Post info</div>
    </div>
  );
}
