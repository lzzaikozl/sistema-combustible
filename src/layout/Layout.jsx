import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex bg-[#0a0f1a] min-h-screen text-slate-200">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
