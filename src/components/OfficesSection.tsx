import { useScrollReveal } from "@/hooks/useScrollReveal";

const offices = [
  {
    name: "Hospital Faro del Mayab #711",
    address: "Calle 24 S/N, por 7 y 7A, Altabrisa, 97133 Mérida, Yuc.",
    phone: "999 921 4962",
    hours: "Lunes y Martes · 9:00 – 13:00",
  },
  {
    name: "Hospital Star Médica #417",
    address: "Calle 26 No. 199, por 15 y 7, Altabrisa, 97133 Mérida, Yuc.",
    phone: "999 943 3334",
    hours: "Jueves · 9:00 – 13:00 | Viernes · 17:00 – 21:00",
  },
];

const OfficesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="ubicaciones" className="section-padding bg-white" aria-label="Ubicaciones">
      <div className="content-width" ref={ref}>
        <p className="label-uppercase mb-4">Consultorios</p>
        <div className="w-10 h-[2px] bg-primary mb-6" />
        <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-12">
          Ubicaciones en Mérida
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {offices.map((office) => (
            <div key={office.name}>
              <h3 className="font-serif text-[20px] text-ink mb-3">{office.name}</h3>
              <div className="space-y-2 text-charcoal text-[15px]">
                <p>{office.address}</p>
                <p>
                  <span className="label-uppercase text-[11px] mr-2">Tel</span>
                  <a href={`tel:+52${office.phone.replace(/\s/g, '')}`} className="link-underline">
                    {office.phone}
                  </a>
                </p>
                <p>
                  <span className="label-uppercase text-[11px] mr-2">Horario</span>
                  {office.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
