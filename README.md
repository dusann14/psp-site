# PSP — prezentacioni sajt

Statički sajt aplikacije PSP, napravljen u [Astro](https://astro.build)-u. Svaka strana se gradi unapred kao čist HTML, pa je sajt brz i dobro ga indeksiraju pretraživači.

## Pokretanje

```sh
npm install
npm run dev       # http://localhost:4321/psp-site/
npm run build     # gotov sajt u dist/
npm run preview   # pregled izgrađenog sajta
```

## Objavljivanje na GitHub Pages

1. Napravite repozitorijum, npr. `psp-site`, i push-ujte ovaj folder na granu `main`.
2. U repozitorijumu otvorite **Settings → Pages** i za **Source** izaberite **GitHub Actions**.
3. Svaki push na `main` pokreće `.github/workflows/deploy.yml`, koji gradi i objavljuje sajt na `https://<korisnik>.github.io/<repozitorijum>/`.

Adresa i putanja se računaju same iz imena korisnika i repozitorijuma. Za sopstveni domen (npr. `https://psp.rs`) u **Settings → Secrets and variables → Actions → Variables** dodajte `SITE_URL=https://psp.rs` i `BASE_PATH=/`, pa domen podesite u **Settings → Pages**.

Lokalno se iste vrednosti zadaju promenljivama okruženja: `SITE_URL=https://psp.rs BASE_PATH=/ npm run build`.

## Šta gde menjati

| Šta | Gde |
| --- | --- |
| Naziv, opis, kontakt e-adresa za „Zakaži demo“ | `src/config.ts` |
| Tekstovi funkcionalnosti, pitanja i koraci | `src/data/features.ts` |
| Početna strana | `src/pages/index.astro` |
| Boje, fontovi i tipografija | `src/styles/global.css` |
| Snimci ekrana | `src/assets/screens/` (isti nazivi fajlova) |
| Slika za deljenje linka (1200×630) | `public/og.png` |

## SEO

- naslov, opis i canonical adresa za svaku stranu;
- Open Graph i Twitter kartice sa slikom za deljenje;
- strukturisani podaci (JSON-LD): `Organization`, `SoftwareApplication`, `FAQPage`, `BreadcrumbList`, `ItemList`;
- `sitemap-index.xml` i `robots.txt` se generišu pri build-u;
- slike u AVIF i WebP formatu u više veličina, sa lenjim učitavanjem;
- posebna strana za svaku funkcionalnost, sa svojim pitanjima i ključnim rečima.

Snimci ekrana su napravljeni sa demo podacima. Nazivi firmi, PIB-ovi i adrese su izmišljeni.
