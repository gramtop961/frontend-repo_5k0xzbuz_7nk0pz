import { BookOpen, TerminalSquare } from "lucide-react";

export default function DocsPreview({ onNavigate }) {
  return (
    <section id="docs" className="py-16 sm:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-medium">
            <BookOpen className="h-3.5 w-3.5" /> Documentation
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Clear, pragmatic docs from day one
          </h2>
          <p className="mt-3 text-neutral-600">
            The Helix Book covers the language, standard library, and tooling. Start with a quick tour, then dive into patterns for systems programming.
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => onNavigate('docs')} className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-rose-500">
              Read the Docs
            </button>
            <a href="#install" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-neutral-900 font-medium ring-1 ring-neutral-200 hover:bg-neutral-50">
              Install CLI
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <TerminalSquare className="h-4 w-4" />
            <span>shell</span>
          </div>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-950 text-neutral-100 p-4 text-sm leading-relaxed">
            <code>
              $ curl -fsSL https://get.helix.sh | sh{"\n"}
              $ hx new app my-service{"
"}
              $ hx run --release
            </code>
          </pre>
          <p className="mt-3 text-sm text-neutral-600">
            Install the toolchain, scaffold a project, and ship an optimized build.
          </p>
        </div>
      </div>
    </section>
  );
}
