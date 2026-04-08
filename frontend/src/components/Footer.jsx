function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70 px-4 py-6 text-slate-400 backdrop-blur-xl">
      <div className="container mx-auto flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-medium text-slate-200">NoteKeeper</p>
          <p className="mt-1 text-sm text-slate-400">
            Capture ideas, organize priorities, and present your work with clarity.
          </p>
        </div>

        <div className="text-sm">
          <span className="text-cyan-300">Copyright {new Date().getFullYear()}</span>{" "}
          <span className="font-semibold text-white">NoteKeeper</span>. Built for polished demos.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
