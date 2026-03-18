export const COMPANY_NAME = "RIITS Metal Craft";
export const BRAND_NAME = "RIITS";

export const CONTACT_DETAILS = {
  primaryPhone: {
    display: "+91 98947 94557",
    value: "+919894794557",
  },
  secondaryPhone: {
    display: "+91 63839 98574",
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
  whatsapp: {
    number: "919876543210", // with country code, no +
    display: "+91 98765 43210",
  },
  socials: {
    facebook: "https://facebook.com/riitsmetalcraft",
    instagram: "https://instagram.com/riitsmetalcraft",
  }
};

/**
 * Formats a phone number for tel: links by removing spaces and non-numeric characters (except +)
 */
export const formatTelLink = (phone: string) => {
  return `tel:${phone.replace(/\s+/g, '')}`;
};

/**
 * Generates a WhatsApp chat URL
 */
export const getWhatsAppUrl = (number: string = CONTACT_DETAILS.whatsapp.number) => {
  return `https://wa.me/${number}`;
};

/**
 * Generates a mailto: link
 */
export const getMailtoLink = (email: string = CONTACT_DETAILS.email) => {
  return `mailto:${email}`;
};
