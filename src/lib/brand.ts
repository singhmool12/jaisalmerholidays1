export const BRAND = {
  name: "Jaisalmerholidays",
  tagline: "Tours & travels in Jaisalmer — desert safaris, camps, sightseeing & more.",
  phone: "+91 79767 21173",
  phoneRaw: "+917976721173",
  whatsapp: "917976721173",
  email: "info@jaisalmerholidays.com",
  address: "Jaisalmer, Rajasthan, India",
  since: "2010",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function tourWaLink(title: string) {
  return waLink(`Hi Jaisalmerholidays, I'm interested in the "${title}". Please share more details.`);
}

export const telLink = `tel:${BRAND.phoneRaw}`;
