export const SITE = {
  name: 'PSP',
  fullName: 'PSP — Profesionalne usluge',
  tagline: 'Softver za advokatske i konsultantske kancelarije',
  description:
    'PSP je softver za advokatske i konsultantske kancelarije: predmeti, evidencija rada, fakturisanje sa direktnim slanjem na SEF, troškovi sa fiskalnih računa, dokumenti, odmori i tim na jednom mestu.',
  email: 'kontakt@example.com',
  locale: 'sr_RS',
  lang: 'sr-Latn'
};

export const demoHref = `mailto:${SITE.email}?subject=${encodeURIComponent('Zahtev za demo — PSP')}&body=${encodeURIComponent('Zdravo,\n\nželeo bih da zakažem demo aplikacije PSP.\n\nNaziv kancelarije:\nBroj zaposlenih:\nTelefon:\n')}`;

export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean.includes('#') || clean.includes('.')) return `${base}${clean}`;
  return `${base}${clean.endsWith('/') ? clean : `${clean}/`}`;
}
