export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Helix. Crafted for builders.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-neutral-600 hover:text-neutral-900">License</a>
          <a href="#" className="text-neutral-600 hover:text-neutral-900">Security</a>
          <a href="#" className="text-neutral-600 hover:text-neutral-900">Brand</a>
        </div>
      </div>
    </footer>
  );
}
