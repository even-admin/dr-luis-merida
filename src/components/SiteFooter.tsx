const SiteFooter = () => {
  return (
    <footer id="contacto" className="section-padding bg-[#0d47a1]" aria-label="Contacto">
      <div className="content-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-serif text-[18px] text-off-white mb-2">Dr. Luis Alberto Ramírez López</p>
            <p className="label-uppercase text-[11px] !text-off-white/60">Neurocirujano · Mérida, Yucatán</p>
          </div>
          <div>
            <p className="label-uppercase text-[11px] mb-3 !text-off-white/60">Contacto</p>
            <div className="space-y-2 text-off-white/80 text-[15px]">
              <p>
                <a href="tel:+529990000000" className="hover:text-off-white transition-colors">999 000 0000</a>
              </p>
              <p>
                <a href="mailto:contacto@drramirezlopez.com" className="hover:text-off-white transition-colors">contacto@drramirezlopez.com</a>
              </p>
            </div>
          </div>
          <div>
            <p className="label-uppercase text-[11px] mb-3 !text-off-white/60">Navegación</p>
            <ul className="space-y-2 text-off-white/80 text-[15px]">
              <li><a href="#especialidad" className="hover:text-off-white transition-colors">Especialidad</a></li>
              <li><a href="#sobre-el-doctor" className="hover:text-off-white transition-colors">Sobre el Doctor</a></li>
              <li><a href="#consultorios" className="hover:text-off-white transition-colors">Consultorios</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-[13px] text-warm-grey">
            © {new Date().getFullYear()} Dr. Luis Alberto Ramírez López. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
