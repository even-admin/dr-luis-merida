import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const offices = [
  {
    name: "Hospital Faro del Mayab #711",
    address: "Calle 24 S/N, por 7 y 7A, Altabrisa, 97133 Mérida, Yuc.",
    phone: "999 000 0000",
    hours: "Lunes a Viernes · 10:00 – 14:00",
  },
  {
    name: "Hospital Star Médica #417",
    address: "Calle 26 No. 199, por 15 y 7, Altabrisa, 97133 Mérida, Yuc.",
    phone: "999 000 0000",
    hours: "Lunes a Viernes · 16:00 – 20:00",
  },
];

// Placeholder — replace with actual embed URLs once provided
const CALENDAR_EMBED_FARO = "";
const CALENDAR_EMBED_STAR = "";

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

        {/* Citas anchor */}
        <div id="citas" className="pt-16 mt-16 border-t border-border">
          <p className="label-uppercase mb-4">Citas</p>
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-6">
            Agende su consulta
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed mb-8 max-w-[520px]">
            Seleccione la ubicación de su preferencia para agendar su cita en línea, 
            o comuníquese directamente por teléfono o WhatsApp.
          </p>

          <Tabs defaultValue="faro" className="w-full mb-10">
            <TabsList className="mb-6 bg-muted">
              <TabsTrigger value="faro" className="text-[13px]">Hospital Faro del Mayab</TabsTrigger>
              <TabsTrigger value="star" className="text-[13px]">Hospital Star Médica</TabsTrigger>
            </TabsList>
            <TabsContent value="faro">
              {CALENDAR_EMBED_FARO ? (
                <div
                  className="w-full min-h-[500px] border border-border rounded"
                  dangerouslySetInnerHTML={{ __html: CALENDAR_EMBED_FARO }}
                />
              ) : (
                <div className="w-full min-h-[300px] border border-border rounded flex items-center justify-center text-muted-foreground text-sm">
                  Calendario próximamente
                </div>
              )}
            </TabsContent>
            <TabsContent value="star">
              {CALENDAR_EMBED_STAR ? (
                <div
                  className="w-full min-h-[500px] border border-border rounded"
                  dangerouslySetInnerHTML={{ __html: CALENDAR_EMBED_STAR }}
                />
              ) : (
                <div className="w-full min-h-[300px] border border-border rounded flex items-center justify-center text-muted-foreground text-sm">
                  Calendario próximamente
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/529990000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans text-[13px] font-medium tracking-wide text-primary-foreground bg-primary px-8 py-3 transition-colors duration-200 hover:bg-primary/90"
            >
              Agendar por WhatsApp
            </a>
            <a
              href="tel:+529990000000"
              className="inline-flex items-center justify-center font-sans text-[13px] font-medium tracking-wide text-ink border border-border px-8 py-3 transition-colors duration-200 hover:border-ink"
            >
              Llamar al consultorio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
