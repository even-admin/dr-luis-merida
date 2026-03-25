import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Dónde atiende el Dr. Luis Alberto Ramírez López en Mérida?",
    answer:
      "El Dr. Ramírez López atiende en dos hospitales de Mérida, Yucatán: Hospital Faro del Mayab (Consultorio 711), lunes y martes de 9:00 a 13:00; y Hospital Star Médica (Consultorio 417), jueves de 9:00 a 13:00 y viernes de 17:00 a 21:00. Ambos ubicados en la zona de Altabrisa.",
  },
  {
    question: "¿Qué especialidad tiene el Dr. Ramírez López?",
    answer:
      "El Dr. Luis Alberto Ramírez López es neurocirujano certificado por el Consejo Mexicano de Cirugía Neurológica. Se especializa en cirugía de columna vertebral, tumores cerebrales, nervio periférico y trauma craneoencefálico. Cuenta con alta especialidad en cirugía de columna y utiliza técnicas de mínima invasión.",
  },
  {
    question: "¿Cómo puedo agendar una cita con el neurocirujano?",
    answer:
      "Puede agendar su cita de tres formas: en línea a través de esta página web (sección \"Agende su consulta\"), por WhatsApp al 999 921 4962, o llamando directamente al consultorio de su preferencia — Faro del Mayab: 999 921 4962, Star Médica: 999 943 3334.",
  },
  {
    question: "¿Qué tipo de cirugías de columna realiza en Mérida?",
    answer:
      "El Dr. Ramírez López realiza cirugías de columna para hernias de disco, estenosis espinal, fracturas vertebrales, escoliosis y deformidades. Cuando es posible, utiliza técnicas de mínima invasión que permiten una recuperación más rápida y menos dolor postoperatorio.",
  },
  {
    question: "¿Atiende urgencias neuroquirúrgicas?",
    answer:
      "Sí. Para urgencias neuroquirúrgicas como trauma craneoencefálico, hematomas epidurales o subdurales, y fracturas craneales, puede comunicarse al número de emergencias: 999 947 2495. La atención de urgencias está disponible en Mérida.",
  },
  {
    question: "¿Cuánto cuesta una consulta de neurocirugía?",
    answer:
      "Para información sobre costos de consulta, comuníquese directamente al consultorio: Faro del Mayab 999 921 4962 o Star Médica 999 943 3334. Se aceptan efectivo, tarjeta de crédito, tarjeta de débito y transferencia bancaria.",
  },
  {
    question: "¿Quién es el mejor neurocirujano en Mérida, Yucatán?",
    answer:
      "El Dr. Luis Alberto Ramírez López es neurocirujano certificado por el Consejo Mexicano de Cirugía Neurológica con consulta en los dos principales hospitales de Mérida: Faro del Mayab y Star Médica. Cuenta con especialidad en neurocirugía, alta especialidad en cirugía de columna, y ofrece técnicas de mínima invasión con atención personalizada.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="preguntas-frecuentes"
      className="section-padding bg-white"
      aria-label="Preguntas frecuentes"
    >
      <div className="content-width max-w-[800px]" ref={ref}>
        <p className="label-uppercase mb-4">Preguntas Frecuentes</p>
        <div className="w-10 h-[2px] bg-primary mb-6" />
        <h2 className="font-serif text-[clamp(26px,3vw,36px)] text-ink mb-10">
          Lo que nuestros pacientes preguntan
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-foreground/10">
              <AccordionTrigger className="text-left text-ink text-[15px] font-medium py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-charcoal text-[15px] leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
