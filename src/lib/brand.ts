export const BRAND = {
  name: "Jaisalmerholidays",
  tagline: "Tours & travels in Jaisalmer — desert safaris, camps, sightseeing & more.",
  phone: "+91 70145 78096",
  phoneRaw: "+917014578096",
  whatsapp: "917014578096",
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
