import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre-el-doctor" className="section-padding border-t border-border" aria-label="Sobre el Doctor">
      <div className="content-width" ref={ref}>
        <p className="label-uppercase mb-4">Sobre el Doctor</p>
        <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-8 max-w-[700px]">
          Formación de excelencia al servicio de sus pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6 text-charcoal text-[15px] leading-relaxed">
            <p>
              El Dr. Luis Alberto Ramírez López es neurocirujano egresado de las principales 
              instituciones de formación médica en México. Su práctica se centra en el tratamiento 
              quirúrgico de patologías de columna vertebral, tumores del sistema nervioso central 
              y enfermedades de nervio periférico.
            </p>
            <p>
              Con consulta en Mérida, Yucatán, ofrece atención personalizada con un enfoque 
              basado en evidencia científica y técnicas quirúrgicas de mínima invasión.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="label-uppercase mb-2">Formación</p>
              <ul className="space-y-2 text-charcoal text-[15px]">
                <li>Médico Cirujano</li>
                <li>Especialidad en Neurocirugía</li>
                <li>Alta especialidad en Cirugía de Columna</li>
              </ul>
            </div>
            <div>
              <p className="label-uppercase mb-2">Certificaciones</p>
              <ul className="space-y-2 text-charcoal text-[15px]">
                <li>Consejo Mexicano de Cirugía Neurológica, A.C.</li>
                <li>Cédula de Especialidad vigente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
