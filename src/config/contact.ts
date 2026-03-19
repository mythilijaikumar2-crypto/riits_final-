export const COMPANY_NAME = "RIITS Metal Craft";
export const BRAND_NAME = "RIITS";

export const LOGO_EMBLEM = "/src/assets/logo/Emblem_logo.webp";
export const LOGO_TEXT = "/src/assets/logo/riits logo text .png";

export const CONTACT_DETAILS = {
  primaryPhone: {
    display: "98947 94557",
    value: "+919894794557",
  },
  secondaryPhone: {
    display: "63839 98574",
    value: "+916383998574",
  },
  email: "riitsmetalcraft@gmail.com",
  address: {
    short: "Trichy, Tamil Nadu, India",
    full: "Tiruchirappalli (Trichy), Tamil Nadu, India",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    pincode: "620001",
  },
  location: {
    latitude: 10.805431,
    longitude: 78.743805,
  },
  whatsapp: {
    number: "919894794557", // with country code, no +
    display: "98947 94557",
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61580755961300",
    instagram: "https://www.instagram.com/riitsmetalcraft/",
  }
};

/**
 * Formats a phone number for tel: links by removing spaces and non-numeric characters (except +)
 */
export const formatTelLink = (phone: string) => {
  return `tel:${phone.replace(/\s+/g, '')}`;
};

/**
 * Generates a WhatsApp chat URL with a pre-filled message
 */
export const getWhatsAppUrl = (number: string = CONTACT_DETAILS.whatsapp.number) => {
  return `https://wa.me/${number}?text=Hi%2C%20I'm%20interested%20in%20your%20fabrication%20services`;
};

/**
 * Generates a mailto: link
 */
export const getMailtoLink = (email: string = CONTACT_DETAILS.email) => {
  return `mailto:${email}`;
};
