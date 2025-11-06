import { ShieldCheck, Zap, Boxes, Code2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Fearless Safety",
    desc: "Ownership and capabilities that prevent data races and memory bugs without sacrificing control.",
  },
  {
    icon: Zap,
    title: "Zero-Cost Abstractions",
    desc: "High-level ergonomics compiled down to lean, predictable machine code.",
  },
  {
    icon: Boxes,
    title: "Composability",
    desc: "A standard library tuned for systems work—async, io, and concurrency primitives built-in.",
  },
  {
    icon: Code2,
    title: "Familiar Tooling",
    desc: "First-party package manager, test runner, and formatter for smooth developer workflows.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="get-started">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Designed for engineers who ship
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            From embedded to edge to cloud, Helix gives you precise control with a clean, modern language surface.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-rose-500/10 grid place-items-center">
                <Icon className="h-5 w-5 text-rose-600" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
