export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Library",
    "name": "Shanti Library",
    "description": "Premium study spaces and comprehensive library services for students and professionals in Mandawali, Delhi.",
    "url": "https://shantilibrary.com",
    "telephone": "+919873591122",
    "email": "info@shantilibrary.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Talab Chowk",
      "addressLocality": "Mandawali",
      "addressRegion": "Delhi",
      "postalCode": "110092",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6288976",
      "longitude": "77.2960714"
    },
    "openingHours": [
      "Mo-Fr 09:00-20:00",
      "Sa 09:00-18:00"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "image": [
      "image5.jpg",
      "image1.jpg",
      "image2.jpg",
      "heroSectionImage.jpg"
    ],
    "hasMap": "https://www.google.com/maps/place/Shanti+Library/@28.6288976,77.2934965,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce503e852b0bd:0xd88058e680d3bbe4!8m2!3d28.6288976!4d77.2960714!16s%2Fg%2F11vczgckmh",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Study Spaces",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Quiet Reading Rooms",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "WhatsApp Support",
        "value": true
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+919873591122",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://wa.me/919873591122"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
