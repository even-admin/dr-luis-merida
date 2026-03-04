import { useScrollReveal } from "@/hooks/useScrollReveal";

const offices = [
  {
    name: "Star Médica Mérida",
    address: "Calle 26 No. 199, por 15 y 7, Altabrisa, 97133 Mérida, Yuc.",
    phone: "999 000 0000",
    hours: "Lunes a Viernes · 10:00 – 14:00",
  },
  {
    name: "Clínica de Mérida",
    address: "Calle 32 No. 242, García Ginerés, 97070 Mérida, Yuc.",
    phone: "999 000 0000",
    hours: "Lunes a Viernes · 16:00 – 20:00",
  },
];

const LocationsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="consultorios" className="section-padding border-t border-border" aria-label="Consultorios">
      <div className="content-width" ref={ref}>
        <p className="label-uppercase mb-4">Consultorios</p>
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

export default LocationsSection;
