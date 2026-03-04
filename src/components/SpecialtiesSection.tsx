import { useScrollReveal } from "@/hooks/useScrollReveal";

const specialties = [
  {
    title: "Cirugía de Columna",
    description: "Hernias de disco, estenosis espinal, fracturas vertebrales, escoliosis y deformidades. Técnicas de mínima invasión cuando es posible.",
  },
  {
    title: "Tumores Cerebrales",
    description: "Diagnóstico y tratamiento quirúrgico de tumores del sistema nervioso central con técnicas microquirúrgicas.",
  },
  {
    title: "Nervio Periférico",
    description: "Síndrome de túnel del carpo, lesiones traumáticas de nervios y neuropatías por atrapamiento.",
  },
  {
    title: "Trauma Craneoencefálico",
    description: "Atención de urgencias neuroquirúrgicas, hematomas y fracturas craneales.",
  },
];

const SpecialtiesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="especialidades" className="section-padding" aria-label="Especialidades">
      <div className="content-width" ref={ref}>
        <p className="label-uppercase mb-4">Especialidades</p>
        <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-12 max-w-[600px]">
          Áreas de atención neuroquirúrgica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {specialties.map((s, i) => (
            <article
              key={s.title}
              className="bg-background p-8 sm:p-10"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="font-serif text-[22px] text-ink mb-3">{s.title}</h3>
              <p className="text-charcoal text-[15px] leading-relaxed">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
