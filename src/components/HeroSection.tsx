import drPortrait from "@/assets/dr-ramirez-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center" aria-label="Inicio">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] w-full min-h-screen">
        {/* Text side */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-32 lg:py-0 order-2 lg:order-1">
          <div className="max-w-[540px]">
            <p className="label-uppercase mb-6 reveal">Neurocirugía · Mérida, Yucatán</p>
            <h1 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.1] text-ink mb-6 reveal reveal-delay-1">
              Dr. Luis Alberto<br />Ramírez López
            </h1>
            <p className="text-charcoal text-[15px] leading-relaxed max-w-[460px] mb-8 reveal reveal-delay-2">
              Atención neuroquirúrgica especializada con enfoque en cirugía de columna, 
              tumores cerebrales y patología de nervio periférico en Mérida, Yucatán.
            </p>
            <a
              href="#contacto"
              className="inline-block font-sans text-[13px] font-medium tracking-wide text-foreground bg-white/40 backdrop-blur-md border border-white/50 rounded-full px-8 py-3 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm reveal reveal-delay-3"
            >
              Agendar consulta
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="relative overflow-hidden order-1 lg:order-2 h-[50vh] lg:h-auto">
          <img
            src={drPortrait}
            alt="Dr. Luis Alberto Ramírez López, neurocirujano en Mérida, Yucatán"
            className="w-full h-full object-cover object-top ken-burns"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent lg:bg-gradient-to-r lg:from-background/10 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
