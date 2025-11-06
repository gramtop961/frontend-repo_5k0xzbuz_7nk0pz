import { Rocket, BookOpenText, Info } from "lucide-react";

export default function Navbar({ onNavigate }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-rose-500/10 grid place-items-center">
            <Rocket className="h-4 w-4 text-rose-600" />
          </div>
          <button
            className="text-lg font-semibold tracking-tight text-neutral-900"
            onClick={() => onNavigate("home")}
          >
            Helix
          </button>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <button
            onClick={() => onNavigate("home")}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("docs")}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <BookOpenText className="h-4 w-4" /> Docs
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <Info className="h-4 w-4" /> About
          </button>
          <a
            href="#get-started"
            className="ml-2 inline-flex items-center rounded-md bg-rose-600 px-3 py-1.5 text-white text-sm font-medium shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
