const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="content-width flex items-center justify-between py-5" aria-label="Navegación principal">
        <a href="#inicio" className="flex flex-col">
          <span className="font-serif text-lg text-ink leading-tight">Dr. Luis Alberto Ramírez López</span>
          <span className="label-uppercase text-[11px] mt-0.5">Neurocirujano</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-sans font-medium tracking-wide text-charcoal">
          <li><a href="#sobre-mi" className="link-underline">Sobre mí</a></li>
          <li><a href="#especialidades" className="link-underline">Especialidades</a></li>
          <li><a href="#consultorios" className="link-underline">Consultorios</a></li>
          <li><a href="#contacto" className="link-underline">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
