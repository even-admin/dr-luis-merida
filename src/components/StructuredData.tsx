const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Luis Alberto Ramírez López",
    medicalSpecialty: "Neurosurgery",
    description: "Neurocirujano especializado en cirugía de columna, tumores cerebrales y nervio periférico en Mérida, Yucatán.",
    url: "https://drramirezlopez.com",
    telephone: ["+529990000000"],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Calle 26 No. 199, por 15 y 7, Altabrisa",
        addressLocality: "Mérida",
        addressRegion: "Yucatán",
        postalCode: "97133",
        addressCountry: "MX",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Calle 32 No. 242, García Ginerés",
        addressLocality: "Mérida",
        addressRegion: "Yucatán",
        postalCode: "97070",
        addressCountry: "MX",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.9674,
      longitude: -89.5926,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
