import { Link, useLocation } from "react-router-dom";
import { BookOpen, PlusSquare, Sparkles } from "lucide-react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 px-4 py-4 text-white shadow-lg shadow-slate-950/20 backdrop-blur-xl">
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center justify-between gap-3 sm:justify-start">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2.5">
              <BookOpen className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide text-white">NoteKeeper</p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Personal Workspace
              </p>
            </div>
          </div>

          <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 sm:flex sm:items-center sm:gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Ready to demo
          </div>
        </Link>

        <div className="flex items-center gap-3 self-start rounded-full border border-slate-800 bg-slate-900/80 p-1.5 sm:self-auto">
          <Link
            to="/"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              location.pathname === "/"
                ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-950/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/create"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
              location.pathname === "/create"
                ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-950/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <PlusSquare className="h-4 w-4" />
            Create Note
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
