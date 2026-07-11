const SITE_URL = "https://jenansurgical.et";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinic`,
  name: "Jenan Surgical Speciality Center",
  alternateName: "Wiirtuu Baqaqsanii Yaaluu Jennaan",
  description:
    "Surgical speciality center offering general & laparoscopic surgery, pediatric care, maternal care, diagnostic imaging, and 24/7 emergency services in Melka Nono, Sheger, Ethiopia.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/hero/banner-logo.png`,
  image: [`${SITE_URL}/images/hero/building-signage.jpg`, `${SITE_URL}/images/hero/entrance-arch-street.jpg`],
  telephone: ["+251911728000", "+251928818100"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shaka Mall, Ashewa Meda",
    addressLocality: "Melka Nono",
    addressRegion: "Oromia",
    addressCountry: "ET",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.032859993684763,
    longitude: 38.665363133229945,
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=9.032859993684763,38.665363133229945",
  email: "jenansurgicalcenter@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  medicalSpecialty: ["Surgical", "Pediatric", "Gynecologic"],
  availableService: [
    { "@type": "MedicalProcedure", name: "General Surgery" },
    { "@type": "MedicalProcedure", name: "Pediatric Care" },
    { "@type": "MedicalProcedure", name: "Maternal & Obstetric Care" },
    { "@type": "MedicalProcedure", name: "Diagnostic Imaging" },
    { "@type": "MedicalProcedure", name: "24/7 Emergency Services" },
  ],
  sameAs: ["https://web.facebook.com/jennanmedicalcenter/"],
  founder: {
    "@type": "Physician",
    name: "Dr. Dejene Desalegn",
    jobTitle: "Founder & General Surgeon",
    medicalSpecialty: "Surgical",
  },
  employee: [
    {
      "@type": "Physician",
      name: "Dr. Dejene Desalegn",
      jobTitle: "Founder & General Surgeon",
      medicalSpecialty: "Surgical",
    },
    {
      "@type": "Physician",
      name: "Dr. Tadesse Soresso",
      jobTitle: "Pediatrician",
      medicalSpecialty: "Pediatric",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Jenan Surgical Speciality Center",
  publisher: { "@id": `${SITE_URL}/#clinic` },
  inLanguage: "en",
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
