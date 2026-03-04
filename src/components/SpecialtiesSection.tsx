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
    <section id="especialidad" className="section-padding bg-[hsl(45,10%,93%)]" aria-label="Especialidad">
      <div className="content-width" ref={ref}>
        <p className="label-uppercase mb-4">Especialidades</p>
        <div className="w-10 h-[2px] bg-primary mb-6" />
        <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-12 max-w-[600px]">
          Áreas de atención neuroquirúrgica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {specialties.map((s, i) => (
            <article
              key={s.title}
              className="bg-card p-8 sm:p-10 rounded shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
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
