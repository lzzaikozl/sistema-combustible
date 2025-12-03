export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] border-r border-[#1f2937] p-6">
      <h2 className="text-xl font-bold text-emerald-400 mb-8">
        Gestión Combustible
      </h2>

      <nav className="flex flex-col gap-4">
        <a className="hover:text-emerald-400 transition">Dashboard</a>
        <a className="hover:text-emerald-400 transition">Reportes</a>
        <a className="hover:text-emerald-400 transition">Ajustes</a>
      </nav>
    </aside>
  );
}
