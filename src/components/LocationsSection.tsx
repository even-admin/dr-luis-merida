import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Placeholder — replace with actual embed URLs once provided
const CALENDAR_EMBED_FARO = "";
const CALENDAR_EMBED_STAR = '<iframe src="https://api.leadconnectorhq.com/widget/booking/cLtGf6lOnYzVgkjjUwQ0" style="width: 100%;border:none;overflow: hidden;min-height:600px;" scrolling="no" id="cLtGf6lOnYzVgkjjUwQ0_1772642559459"></iframe><script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"><\/script>';

const LocationsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="consultorios" className="section-padding border-t border-border" aria-label="Consultorios">
      <div className="content-width" ref={ref}>
        {/* Citas section first */}
        <div id="citas">
          <p className="label-uppercase mb-4">Citas</p>
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-6">
            Agende su consulta
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed mb-8 max-w-[520px]">
            Seleccione la ubicación de su preferencia para agendar su cita en línea, 
            o comuníquese directamente por teléfono o WhatsApp.
          </p>

          <Tabs defaultValue="faro" className="w-full">
            <TabsList className="mb-6 bg-transparent gap-3 p-0 h-auto">
              <TabsTrigger value="faro" className="text-[13px] font-medium tracking-wide rounded-full px-6 py-2.5 bg-white text-ink border border-border transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:bg-primary hover:text-white hover:border-primary shadow-none">Hospital Faro del Mayab</TabsTrigger>
              <TabsTrigger value="star" className="text-[13px] font-medium tracking-wide rounded-full px-6 py-2.5 bg-white text-ink border border-border transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:bg-primary hover:text-white hover:border-primary shadow-none">Hospital Star Médica</TabsTrigger>
            </TabsList>
            <TabsContent value="faro">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/zRPVLsuGUsTA4IIpNI8H"
                className="w-full border-none rounded"
                style={{ minHeight: "1200px", overflow: "hidden" }}
                scrolling="no"
                title="Agendar cita - Hospital Faro del Mayab"
              />
            </TabsContent>
            <TabsContent value="star">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/cLtGf6lOnYzVgkjjUwQ0"
                className="w-full border-none rounded"
                style={{ minHeight: "1200px", overflow: "hidden" }}
                scrolling="no"
                title="Agendar cita - Hospital Star Médica"
              />
            </TabsContent>
          </Tabs>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://wa.me/529990000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans text-[13px] font-medium tracking-wide rounded-full px-8 py-3 bg-white text-ink border border-border transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
            >
              Agendar por WhatsApp
            </a>
            <a
              href="tel:+529990000000"
              className="inline-flex items-center justify-center font-sans text-[13px] font-medium tracking-wide rounded-full px-8 py-3 bg-white text-ink border border-border transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
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
