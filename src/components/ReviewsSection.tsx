import { useScrollReveal } from "@/hooks/useScrollReveal";

const ReviewsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="opiniones" className="section-padding bg-[hsl(45,10%,93%)]" aria-label="Opiniones de pacientes">
      <div className="content-width" ref={ref}>
        <p className="label-uppercase mb-4">Opiniones</p>
        <div className="w-10 h-[2px] bg-primary mb-6" />
        <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-12 max-w-[600px]">
          Lo que dicen los pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Excelente atención y profesionalismo. Me explicó todo el procedimiento con mucha claridad y paciencia.",
              author: "Paciente verificado",
              rating: 5,
            },
            {
              text: "Muy recomendado. Después de visitar varios especialistas, el Dr. Ramírez fue quien me dio un diagnóstico certero.",
              author: "Paciente verificado",
              rating: 5,
            },
            {
              text: "Trato humano y seguimiento puntual después de la cirugía. Agradecido con todo su equipo.",
              author: "Paciente verificado",
              rating: 5,
            },
          ].map((review, i) => (
            <blockquote key={i} className="flex flex-col relative">
              <span className="font-serif text-[60px] leading-none text-warm-grey/30 absolute -top-2 -left-1 select-none" aria-hidden="true">"</span>
              <div className="flex gap-0.5 mb-4 mt-8">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-ink">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal text-[15px] leading-relaxed mb-4 italic font-serif">
                "{review.text}"
              </p>
              <cite className="label-uppercase text-[11px] not-italic mt-auto">{review.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
