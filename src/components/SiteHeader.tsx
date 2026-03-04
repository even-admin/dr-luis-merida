import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "#especialidad", label: "Especialidad" },
  { href: "#sobre-el-doctor", label: "Sobre el Doctor" },
  { href: "#consultorios", label: "Consultorios" },
  { href: "#citas", label: "Citas" },
  { href: "#contacto", label: "Contacto" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          height: 64,
          backgroundColor: scrolled ? "rgba(247, 246, 242, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <nav className="content-width flex items-center justify-between h-full" aria-label="Navegación principal">
          <a href="#inicio" className="font-serif text-[16px] text-ink leading-tight">
            Dr. Ramírez López
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline font-sans text-[13px] font-normal uppercase tracking-[0.12em] text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="block w-5 h-px bg-ink" />
            <span className="block w-5 h-px bg-ink" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-off-white"
          style={{ animation: "mobile-fade 200ms ease forwards" }}
        >
          <button
            onClick={closeMenu}
            className="absolute top-5 right-6 w-8 h-8 flex items-center justify-center"
            aria-label="Cerrar menú"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" className="text-ink" />
            </svg>
          </button>

          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="font-sans text-[15px] font-normal uppercase tracking-[0.15em] text-charcoal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
