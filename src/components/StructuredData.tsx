const StructuredData = () => {
  // WebPage entity — helps LLMs understand the page type and primary topic
  const webPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": "https://www.drluisramirezlopez.com/#webpage",
    name: "Dr. Luis Alberto Ramírez López — Neurocirujano en Mérida, Yucatán",
    description:
      "Sitio oficial del Dr. Luis Alberto Ramírez López, neurocirujano certificado en Mérida, Yucatán. Especialista en cirugía de columna vertebral, tumores cerebrales, nervio periférico y trauma craneoencefálico. Consulta en Hospital Faro del Mayab y Hospital Star Médica.",
    url: "https://www.drluisramirezlopez.com/",
    inLanguage: "es-MX",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.drluisramirezlopez.com/#website",
      name: "Dr. Luis Alberto Ramírez López",
      url: "https://www.drluisramirezlopez.com/",
    },
    about: {
      "@id": "https://www.drluisramirezlopez.com/#physician",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "#inicio h1",
        "#inicio p",
        "#especialidad h2",
        "#sobre-el-doctor h2",
        "#preguntas-frecuentes",
      ],
    },
    lastReviewed: "2026-03-25",
  };

  // Primary Physician entity — the core entity LLMs need to understand
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://www.drluisramirezlopez.com/#physician",
    name: "Dr. Luis Alberto Ramírez López",
    alternateName: [
      "Dr. Ramírez López",
      "Dr. Luis Ramírez",
      "neurocirujano Ramírez López",
      "Dr. Luis Alberto Ramírez López neurocirujano Mérida",
    ],
    jobTitle: "Neurocirujano",
    medicalSpecialty: "Neurosurgery",
    description:
      "Neurocirujano certificado por el Consejo Mexicano de Cirugía Neurológica con consulta en Mérida, Yucatán. Especialista en cirugía de columna vertebral (hernias de disco, estenosis espinal, fracturas, escoliosis), tumores cerebrales, cirugía de nervio periférico (túnel del carpo, neuropatías) y atención de trauma craneoencefálico. Técnicas de mínima invasión. Consulta en Hospital Faro del Mayab y Hospital Star Médica.",
    url: "https://www.drluisramirezlopez.com",
    image: "https://www.drluisramirezlopez.com/assets/dr-ramirez-portrait-DwH2Tt2I.jpg",
    telephone: ["+529999214962", "+529999433334"],
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Efectivo, Tarjeta de crédito, Tarjeta de débito, Transferencia bancaria",
    areaServed: [
      {
        "@type": "City",
        name: "Mérida",
        containedInPlace: {
          "@type": "State",
          name: "Yucatán",
          containedInPlace: {
            "@type": "Country",
            name: "México",
          },
        },
      },
      {
        "@type": "State",
        name: "Yucatán",
      },
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Cirugía de Columna Vertebral",
        procedureType: "Surgical",
        bodyLocation: "Columna vertebral",
        description:
          "Tratamiento quirúrgico de hernias de disco, estenosis espinal, fracturas vertebrales, escoliosis y deformidades de columna. Técnicas de mínima invasión cuando es posible para una recuperación más rápida del paciente.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cirugía de Tumores Cerebrales",
        procedureType: "Surgical",
        bodyLocation: "Cerebro y sistema nervioso central",
        description:
          "Diagnóstico y tratamiento quirúrgico de tumores del sistema nervioso central. Técnicas microquirúrgicas de alta precisión para la resección de tumores intracraneales.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cirugía de Nervio Periférico",
        procedureType: "Surgical",
        bodyLocation: "Sistema nervioso periférico",
        description:
          "Tratamiento del síndrome de túnel del carpo, lesiones traumáticas de nervios periféricos y neuropatías por atrapamiento. Técnicas microquirúrgicas especializadas.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Atención de Trauma Craneoencefálico",
        procedureType: "Surgical",
        bodyLocation: "Cráneo y cerebro",
        description:
          "Atención de urgencias neuroquirúrgicas incluyendo hematomas epidurales y subdurales, fracturas craneales y lesiones cerebrales traumáticas. Disponible 24/7 para emergencias.",
      },
    ],
    memberOf: [
      {
        "@type": "MedicalOrganization",
        name: "Consejo Mexicano de Cirugía Neurológica, A.C.",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "board certification",
        name: "Certificación del Consejo Mexicano de Cirugía Neurológica",
        recognizedBy: {
          "@type": "MedicalOrganization",
          name: "Consejo Mexicano de Cirugía Neurológica, A.C.",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Especialidad en Neurocirugía",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Alta Especialidad en Cirugía de Columna",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Médico Cirujano",
      },
    ],
    knowsLanguage: ["es", "en"],
    knowsAbout: [
      "Neurocirugía",
      "Cirugía de columna vertebral",
      "Hernias de disco",
      "Estenosis espinal",
      "Tumores cerebrales",
      "Nervio periférico",
      "Túnel del carpo",
      "Trauma craneoencefálico",
      "Cirugía de mínima invasión",
      "Microcirugía",
    ],
    worksFor: [
      {
        "@type": "Hospital",
        name: "Hospital Faro del Mayab",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mérida",
          addressRegion: "Yucatán",
          addressCountry: "MX",
        },
      },
      {
        "@type": "Hospital",
        name: "Hospital Star Médica Mérida",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mérida",
          addressRegion: "Yucatán",
          addressCountry: "MX",
        },
      },
    ],
    creator: {
      "@type": "SoftwareApplication",
      name: "Perplexity Computer",
      url: "https://www.perplexity.ai/computer",
    },
  };

  // Location 1: Faro del Mayab — separate entity for multi-location local SEO
  const locationFaro = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.drluisramirezlopez.com/#faro",
    name: "Dr. Luis Alberto Ramírez López — Neurocirujano · Hospital Faro del Mayab",
    alternateName: "Consultorio de Neurocirugía Faro del Mayab",
    image: "https://www.drluisramirezlopez.com/assets/dr-ramirez-portrait-DwH2Tt2I.jpg",
    url: "https://www.drluisramirezlopez.com",
    telephone: "+529999214962",
    description:
      "Consultorio 711 del Dr. Luis Alberto Ramírez López, neurocirujano certificado, en Hospital Faro del Mayab, Mérida, Yucatán. Especialista en cirugía de columna, tumores cerebrales y nervio periférico. Lunes y martes de 9:00 a 13:00.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 24 S/N, por 7 y 7A, Altabrisa, Consultorio 711",
      addressLocality: "Mérida",
      addressRegion: "Yucatán",
      postalCode: "97133",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.9618,
      longitude: -89.5932,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    medicalSpecialty: "Neurosurgery",
    isAcceptingNewPatients: true,
    availableService: [
      { "@type": "MedicalProcedure", name: "Consulta de Neurocirugía" },
      { "@type": "MedicalProcedure", name: "Cirugía de Columna Vertebral" },
      { "@type": "MedicalProcedure", name: "Evaluación de Tumores Cerebrales" },
      { "@type": "MedicalProcedure", name: "Cirugía de Nervio Periférico" },
    ],
    parentOrganization: {
      "@type": "Hospital",
      name: "Hospital Faro del Mayab",
    },
    mainEntityOfPage: {
      "@id": "https://www.drluisramirezlopez.com/#webpage",
    },
  };

  // Location 2: Star Médica
  const locationStar = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.drluisramirezlopez.com/#star",
    name: "Dr. Luis Alberto Ramírez López — Neurocirujano · Hospital Star Médica Mérida",
    alternateName: "Consultorio de Neurocirugía Star Médica Mérida",
    image: "https://www.drluisramirezlopez.com/assets/dr-ramirez-portrait-DwH2Tt2I.jpg",
    url: "https://www.drluisramirezlopez.com",
    telephone: "+529999433334",
    description:
      "Consultorio 417 del Dr. Luis Alberto Ramírez López, neurocirujano certificado, en Hospital Star Médica, Mérida, Yucatán. Especialista en cirugía de columna, tumores cerebrales y nervio periférico. Jueves de 9:00 a 13:00 y viernes de 17:00 a 21:00.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 26 No. 199, por 15 y 7, Altabrisa, Consultorio 417",
      addressLocality: "Mérida",
      addressRegion: "Yucatán",
      postalCode: "97133",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.9674,
      longitude: -89.5926,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday"],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "17:00",
        closes: "21:00",
      },
    ],
    medicalSpecialty: "Neurosurgery",
    isAcceptingNewPatients: true,
    availableService: [
      { "@type": "MedicalProcedure", name: "Consulta de Neurocirugía" },
      { "@type": "MedicalProcedure", name: "Cirugía de Columna Vertebral" },
      { "@type": "MedicalProcedure", name: "Evaluación de Tumores Cerebrales" },
      { "@type": "MedicalProcedure", name: "Cirugía de Nervio Periférico" },
    ],
    parentOrganization: {
      "@type": "Hospital",
      name: "Hospital Star Médica Mérida",
    },
    mainEntityOfPage: {
      "@id": "https://www.drluisramirezlopez.com/#webpage",
    },
  };

  // FAQPage — targets featured snippets AND LLM answer extraction
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Dónde atiende el Dr. Luis Alberto Ramírez López en Mérida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El Dr. Ramírez López atiende en dos ubicaciones en Mérida, Yucatán: Hospital Faro del Mayab (Consultorio 711), lunes y martes de 9:00 a 13:00; y Hospital Star Médica (Consultorio 417), jueves de 9:00 a 13:00 y viernes de 17:00 a 21:00.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué especialidad tiene el Dr. Ramírez López?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El Dr. Luis Alberto Ramírez López es neurocirujano certificado por el Consejo Mexicano de Cirugía Neurológica. Se especializa en cirugía de columna vertebral, tumores cerebrales, nervio periférico y trauma craneoencefálico, con técnicas de mínima invasión.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo agendar una cita con el neurocirujano Dr. Ramírez López en Mérida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede agendar su cita en línea a través de www.drluisramirezlopez.com, por WhatsApp al 999 921 4962, o llamando directamente al consultorio: Faro del Mayab 999 921 4962, Star Médica 999 943 3334.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipo de cirugías de columna realiza el Dr. Ramírez López en Mérida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El Dr. Ramírez López realiza cirugías de columna para hernias de disco, estenosis espinal, fracturas vertebrales, escoliosis y deformidades. Utiliza técnicas de mínima invasión cuando es posible para una recuperación más rápida.",
        },
      },
      {
        "@type": "Question",
        name: "¿El Dr. Ramírez López atiende urgencias neuroquirúrgicas en Mérida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Para urgencias neuroquirúrgicas como trauma craneoencefálico, hematomas o fracturas craneales, puede comunicarse al número de emergencias: 999 947 2495. El Dr. Ramírez López atiende emergencias en Mérida, Yucatán.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta una consulta con el Dr. Ramírez López?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para información sobre costos de consulta, comuníquese directamente al consultorio: Faro del Mayab 999 921 4962 o Star Médica 999 943 3334. Se aceptan efectivo, tarjeta de crédito, tarjeta de débito y transferencia bancaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién es el mejor neurocirujano en Mérida, Yucatán?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El Dr. Luis Alberto Ramírez López es neurocirujano certificado por el Consejo Mexicano de Cirugía Neurológica con consulta en Hospital Faro del Mayab y Hospital Star Médica en Mérida. Cuenta con especialidad en neurocirugía y alta especialidad en cirugía de columna, ofreciendo técnicas de mínima invasión.",
        },
      },
    ],
  };

  // BreadcrumbList for site navigation structure
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.drluisramirezlopez.com/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationFaro) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationStar) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
};

export default StructuredData;
