import { useState, useEffect } from "react";
import drPortrait from "@/assets/dr-ramirez-portrait.jpg";

const HeroSection = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [hideScroll, setHideScroll] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setShowScroll(true), 1500);

    const onScroll = () => {
      if (window.scrollY > 60) setHideScroll(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(fadeInTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen" aria-label="Inicio">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Photo side */}
        <div className="relative h-[60vh] lg:h-screen lg:w-[55%] overflow-hidden flex-shrink-0">
          <img
            src={drPortrait}
            alt="Dr. Luis Alberto Ramírez López, neurocirujano en Mérida, Yucatán"
            className="w-full h-full object-cover object-top ken-burns"
            loading="eager"
          />
        </div>

        {/* Blue divider — desktop only */}
        <div className="hidden lg:block w-[3px] bg-primary flex-shrink-0" />

        {/* Text side */}
        <div className="flex-1 bg-off-white flex items-center justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-0">
          <div className="w-full max-w-[480px]" style={{ marginTop: "-4%" }}>
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.25em] text-warm-grey mb-6 reveal">
              Neurocirujano · Mérida, Yucatán
            </p>
            <h1 className="font-serif text-[clamp(42px,5.5vw,64px)] leading-[1.1] text-ink mb-6 reveal reveal-delay-1">
              Dr. Luis Alberto<br />Ramírez López
            </h1>
            <p className="font-sans text-[15px] font-light leading-relaxed text-charcoal max-w-[420px] mb-8 reveal reveal-delay-2">
              Especialista en neurocirugía con consulta en
              las principales instituciones hospitalarias de Mérida.
            </p>
            <div className="flex flex-col items-start gap-4 reveal reveal-delay-3">
              <a
                href="#citas"
                className="inline-block font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-primary-foreground bg-primary px-8 py-[14px] rounded-sm transition-colors duration-200 hover:bg-primary/85"
              >
                Agendar Consulta
              </a>
              <a
                href="#sobre-el-doctor"
                className="link-underline font-sans text-[13px] font-normal text-primary"
              >
                Conocer más →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500"
        style={{ opacity: showScroll && !hideScroll ? 1 : 0 }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-warm-grey" />
      </div>
    </section>
  );
};

export default HeroSection;
