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
                <span className="text-[11px] uppercase tracking-wider text-off-white/50 mr-2">Faro</span>
                <a href="tel:+529999214962" className="hover:text-off-white transition-colors">999 921 4962</a>
              </p>
              <p>
                <span className="text-[11px] uppercase tracking-wider text-off-white/50 mr-2">Star</span>
                <a href="tel:+529999433334" className="hover:text-off-white transition-colors">999 943 3334</a>
              </p>
              <p>
                <span className="text-[11px] uppercase tracking-wider text-off-white/50 mr-2">Urgencias</span>
                <a href="tel:+529999472495" className="hover:text-off-white transition-colors">999 947 2495</a>
              </p>
            </div>
          </div>
          <div>
            <p className="label-uppercase text-[11px] mb-3 !text-off-white/60">Navegación</p>
            <ul className="space-y-2 text-off-white/80 text-[15px]">
              <li><a href="#especialidad" className="hover:text-off-white transition-colors">Especialidad</a></li>
              <li><a href="#sobre-el-doctor" className="hover:text-off-white transition-colors">Sobre el Doctor</a></li>
              <li><a href="#consultorios" className="hover:text-off-white transition-colors">Consultorios</a></li>
              <li><a href="#preguntas-frecuentes" className="hover:text-off-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-[13px] text-off-white/60">
              © {new Date().getFullYear()} Dr. Luis Alberto Ramírez López. Todos los derechos reservados.
            </p>
            <a href="https://www.perplexity.ai/computer" target="_blank" rel="noopener noreferrer" className="text-[11px] text-off-white/40 hover:text-off-white/60 transition-colors">
              Created with Perplexity Computer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
