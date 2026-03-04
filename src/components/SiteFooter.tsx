const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12" aria-label="Pie de página">
      <div className="content-width flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="font-serif text-[15px] text-ink">Dr. Luis Alberto Ramírez López</p>
          <p className="label-uppercase text-[11px] mt-1">Neurocirujano · Mérida, Yucatán</p>
        </div>
        <p className="text-[13px] text-warm-grey">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
