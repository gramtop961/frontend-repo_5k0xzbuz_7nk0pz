import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-medium shadow/50 shadow-black/5">
          <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          New systems language • Helix
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
          Safety-speed harmony for modern systems
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 text-base sm:text-lg">
          Helix blends fearless memory safety with bare-metal performance, giving engineers a precise and ergonomic toolchain for kernels, services, and real-time applications.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/40">
            Install Helix
          </a>
          <a href="#docs" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-neutral-900 font-medium ring-1 ring-neutral-200 hover:bg-neutral-50">
            Explore Docs
          </a>
        </div>
      </div>
    </section>
  );
}
