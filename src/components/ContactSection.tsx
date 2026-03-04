import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contacto" className="section-padding border-t border-border" aria-label="Contacto">
      <div className="content-width" ref={ref}>
        <div className="max-w-[560px]">
          <p className="label-uppercase mb-4">Contacto</p>
          <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-6">
            Agende su consulta
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed mb-8">
            Para programar una cita o solicitar una valoración neuroquirúrgica, 
            puede comunicarse directamente a los números de consultorio o enviar un mensaje 
            por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/529990000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-sans text-[13px] font-medium tracking-wide text-primary-foreground bg-primary px-8 py-3 transition-colors duration-200 hover:bg-blue/90"
            >
              WhatsApp
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

export default ContactSection;
