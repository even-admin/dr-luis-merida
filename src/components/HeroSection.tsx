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
    <section id="inicio" className="relative h-screen flex" aria-label="Inicio">
      {/* Photo side — 55% on desktop, top 60vh on mobile */}
      <div className="absolute inset-0 lg:relative lg:w-[55%] h-[60vh] lg:h-full overflow-hidden">
        <img
          src={drPortrait}
          alt="Dr. Luis Alberto Ramírez López, neurocirujano en Mérida, Yucatán"
          className="w-full h-full object-cover object-top ken-burns"
          loading="eager"
        />
        {/* Thin blue left border on desktop between photo and text */}
        <div className="hidden lg:block absolute top-0 right-0 w-[3px] h-full bg-primary" />
      </div>

      {/* Text side — 45% on desktop, below photo on mobile */}
      <div className="absolute bottom-0 left-0 right-0 lg:relative lg:w-[45%] bg-off-white flex items-start lg:items-center justify-center"
        style={{ top: "60vh" }}
      >
        <div className="lg:hidden absolute inset-0 bg-off-white" />
        <div className="relative px-6 sm:px-12 lg:px-16 xl:px-20 py-10 lg:py-0 w-full max-w-[520px]"
          style={{ marginTop: "-2%" }}
        >
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
