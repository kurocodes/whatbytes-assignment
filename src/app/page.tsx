import Sidebar from "@/components/filters/Sidebar";


export default function Home() {
  return (
    <main className="flex gap-6 px-8 py-6">
      {/* Sidebar */}
      <aside className="w-64">
        <Sidebar />
      </aside>

      {/* Product Section */}
      <section className="flex-1">

      </section>
    </main>
  );
}
