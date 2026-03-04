const SiteFooter = () => {
  return (
    <footer id="contacto" className="border-t border-border section-padding" aria-label="Contacto">
      <div className="content-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-serif text-[18px] text-ink mb-2">Dr. Luis Alberto Ramírez López</p>
            <p className="label-uppercase text-[11px]">Neurocirujano · Mérida, Yucatán</p>
          </div>
          <div>
            <p className="label-uppercase text-[11px] mb-3">Contacto</p>
            <div className="space-y-2 text-charcoal text-[15px]">
              <p>
                <a href="tel:+529990000000" className="link-underline">999 000 0000</a>
              </p>
              <p>
                <a href="mailto:contacto@drramirezlopez.com" className="link-underline">contacto@drramirezlopez.com</a>
              </p>
            </div>
          </div>
          <div>
            <p className="label-uppercase text-[11px] mb-3">Navegación</p>
            <ul className="space-y-2 text-charcoal text-[15px]">
              <li><a href="#especialidad" className="link-underline">Especialidad</a></li>
              <li><a href="#sobre-el-doctor" className="link-underline">Sobre el Doctor</a></li>
              <li><a href="#consultorios" className="link-underline">Consultorios</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-[13px] text-warm-grey">
            © {new Date().getFullYear()} Dr. Luis Alberto Ramírez López. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
