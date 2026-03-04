import { useState, useEffect } from "react";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-white"
    >
      <nav className="content-width flex items-center justify-between h-full" aria-label="Navegación principal">
        <a href="#inicio" className="font-serif text-[16px] text-ink leading-tight">
          Dr. Ramírez López
        </a>

        <a
          href="#citas"
          className="font-sans text-[13px] font-medium tracking-wide text-foreground bg-white/40 backdrop-blur-md border border-white/50 rounded-full px-6 py-2.5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm"
        >
          Agendar consulta
        </a>
      </nav>
    </header>
  );
};

export default SiteHeader;
