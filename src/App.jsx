import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import DocsPreview from './components/DocsPreview';
import Footer from './components/Footer';

function DocsFoundation() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-neutral-500">Guides</p>
          <nav className="mt-2 flex flex-col gap-2 text-sm">
            <a href="#" className="text-neutral-700 hover:text-neutral-900">Introduction</a>
            <a href="#" className="text-neutral-700 hover:text-neutral-900">Installation</a>
            <a href="#" className="text-neutral-700 hover:text-neutral-900">Language tour</a>
            <a href="#" className="text-neutral-700 hover:text-neutral-900">Concurrency</a>
            <a href="#" className="text-neutral-700 hover:text-neutral-900">Memory model</a>
          </nav>
        </aside>
        <article className="prose prose-neutral max-w-none">
          <h1>Helix Documentation</h1>
          <p>
            This is the foundation for the docs site. Expand the sidebar, add pages, and link to deeper content as the language evolves. Keep examples runnable and minimal.
          </p>
          <h2>Quick start</h2>
          <pre className="not-prose rounded-lg bg-neutral-950 text-neutral-100 p-4 text-sm overflow-x-auto"><code>{`$ hx new app hello-helix
$ cd hello-helix
$ hx run`}</code></pre>
          <h2>Design principles</h2>
          <ul>
            <li>Memory safety without garbage collection.</li>
            <li>Deterministic performance and predictability.</li>
            <li>Composability through capabilities and modules.</li>
            <li>Ergonomic tooling for day-to-day workflows.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">About Helix</h1>
          <p className="mt-4 text-neutral-700">
            Helix is a modern systems programming language focused on safety, performance, and clarity. It embraces a capability-driven model and zero-cost abstractions to help engineers build reliable software from firmware to distributed systems.
          </p>
          <p className="mt-3 text-neutral-700">
            The project is guided by three values: precision, pragmatism, and empathy for the developer experience. Expect a lean syntax, powerful types, and tooling that respects your time.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">Roadmap highlights</h2>
          <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-2">
            <li>Stable core language with borrow and capability systems</li>
            <li>Async runtime tuned for IO-heavy services</li>
            <li>FFI for C and WASI targets</li>
            <li>Package index and documentation hub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar onNavigate={setRoute} />

      {route === 'home' && (
        <>
          <Hero />
          <FeatureGrid />
          <DocsPreview onNavigate={setRoute} />
        </>
      )}

      {route === 'docs' && <DocsFoundation />}
      {route === 'about' && <AboutPage />}

      <Footer />
    </div>
  );
}
