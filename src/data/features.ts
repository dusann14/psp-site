import type { ScreenName } from './screens';

export type IconName = 'briefcase' | 'invoice' | 'receipt' | 'folder' | 'team' | 'shield' | 'clock' | 'users' | 'search' | 'bolt' | 'globe' | 'phone' | 'check' | 'chart' | 'calendar' | 'bell' | 'lock' | 'layers' | 'scan' | 'file' | 'sparkle' | 'link';

export interface Feature {
  slug: string;
  icon: IconName;
  name: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  titleAccent: string;
  lead: string;
  screen: ScreenName;
  mobile?: ScreenName;
  benefits: { icon: IconName; title: string; text: string }[];
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export const features: Feature[] = [
  {
    slug: 'predmeti',
    icon: 'briefcase',
    name: 'Predmeti',
    short: 'Slučajevi, angažmani i projekti sa učesnicima, timom, satnicama i celom istorijom rada.',
    seoTitle: 'Upravljanje predmetima za advokatske kancelarije',
    seoDescription:
      'Vodite predmete na jednom mestu: klijenti i suprotne strane, tim i satnice, podpredmeti, evidencija rada, dokumenti i fakture. Izveštaj o radu u Word-u i PDF-u.',
    title: 'Svaki predmet,',
    titleAccent: 'potpuna slika.',
    lead:
      'Predmet je središte PSP-a. Na njemu su učesnici, tim, satnice, uneti rad, dokumenti, troškovi i fakture, pa niko više ne traži podatke po tabelama i mejlovima.',
    screen: 'matter',
    mobile: 'm-matters',
    benefits: [
      { icon: 'users', title: 'Učesnici i uloge', text: 'Klijenti, suprotne strane i kontakt osobe, svako sa svojom ulogom na predmetu.' },
      { icon: 'team', title: 'Tim i satnice', text: 'Ko radi na predmetu i po kojoj ceni, po poziciji ili posebno za svaku osobu.' },
      { icon: 'clock', title: 'Evidencija rada', text: 'Aktivnosti sa vremenom i opisom, naplative ili interne, spremne za fakturu.' },
      { icon: 'layers', title: 'Podpredmeti', text: 'Veliki angažmani se dele na manje celine bez gubljenja veze sa glavnim predmetom.' },
      { icon: 'file', title: 'Izveštaj o radu', text: 'Pregled svih aktivnosti za klijenta, izvezen u Word ili PDF jednim klikom.' },
      { icon: 'check', title: 'Jasan životni ciklus', text: 'Nacrt, aktivan, na čekanju, zatvoren i arhiviran, sa kontrolisanim prelazima.' }
    ],
    steps: [
      { title: 'Otvorite predmet', text: 'Unesite naziv, oblast rada i valutu. Referentni broj se dodeljuje sam.' },
      { title: 'Dodajte ljude', text: 'Povežite klijente i suprotne strane, pa izaberite tim i satnice.' },
      { title: 'Beležite rad', text: 'Tim unosi aktivnosti, a pregled pokazuje šta je naplativo i šta čeka fakturu.' },
      { title: 'Fakturišite', text: 'Od unetog rada i troškova nastaje faktura koja ide pravo na SEF.' }
    ],
    faq: [
      { q: 'Da li predmet može da ima više klijenata?', a: 'Može. Na predmet se dodaje proizvoljan broj učesnika, a svaki ima svoju ulogu: klijent, suprotna strana ili kontakt.' },
      { q: 'Kako se određuje cena rada?', a: 'Satnica se zadaje po poziciji (npr. partner, advokat, saradnik) ili posebno za osobu na tom predmetu. Rad se obračunava po toj ceni.' },
      { q: 'Mogu li da izvezem pregled rada za klijenta?', a: 'Da. Izveštaj o aktivnostima se izvozi u Word i PDF i može se priložiti uz fakturu.' }
    ]
  },
  {
    slug: 'fakturisanje-sef',
    icon: 'invoice',
    name: 'Fakturisanje i SEF',
    short: 'Računi, avansi, predračuni i knjižna odobrenja, sa direktnim slanjem na Sistem e-faktura.',
    seoTitle: 'Fakturisanje sa direktnim slanjem na SEF (e-fakture)',
    seoDescription:
      'Izdajte račune, avansne račune, predračune, knjižna odobrenja i zaduženja i pošaljite ih direktno na SEF. Ulazne fakture stižu same. Uplate, potraživanja i više valuta.',
    title: 'Od rada do SEF-a',
    titleAccent: 'bez prepisivanja.',
    lead:
      'Faktura nastaje iz rada i troškova na predmetu i odlazi direktno na Sistem e-faktura. PSP prati status, uvozi ulazne fakture i vodi računa o uplatama i dugovanjima.',
    screen: 'invoices-out',
    benefits: [
      { icon: 'layers', title: 'Pet vrsta dokumenata', text: 'Račun, avansni račun, predračun, knjižno odobrenje i knjižno zaduženje.' },
      { icon: 'bolt', title: 'Direktno na SEF', text: 'Slanje jednim klikom, uz automatske ponovne pokušaje i praćenje statusa.' },
      { icon: 'link', title: 'Ulazne fakture same stižu', text: 'Fakture dobavljača se preuzimaju sa SEF-a i povezuju sa partnerima.' },
      { icon: 'chart', title: 'Uplate i potraživanja', text: 'Evidencija uplata, stanje po fakturi i pregled nenaplaćenog po valuti.' },
      { icon: 'globe', title: 'Više valuta, dva jezika', text: 'Dokumenti u dinarima ili stranoj valuti, sa dvojezičnim PDF-om.' },
      { icon: 'lock', title: 'Izdato je nepromenljivo', text: 'Izdata faktura se ne menja, a svaka izmena je nova, sačuvana revizija.' }
    ],
    steps: [
      { title: 'Izaberite rad i troškove', text: 'Nefakturisan rad i odobreni troškovi predmeta su već spremni.' },
      { title: 'Pregledajte fakturu', text: 'Broj se dodeljuje po kompaniji, vrsti i godini. Popusti i limiti se primenjuju sami.' },
      { title: 'Pošaljite na SEF', text: 'PSP šalje dokument i prati njegov status dok ga kupac ne prihvati.' },
      { title: 'Evidentirajte uplatu', text: 'Uplata zatvara potraživanje, a pregled firme se odmah ažurira.' }
    ],
    faq: [
      { q: 'Da li mi treba poseban program za SEF?', a: 'Ne. PSP komunicira sa Sistemom e-faktura preko zvaničnog API-ja, pomoću API ključa vaše kompanije.' },
      { q: 'Šta se dešava ako SEF ne odgovara?', a: 'Slanje se automatski ponavlja sa sve dužim razmakom, a ista faktura se nikad ne šalje dva puta.' },
      { q: 'Da li dobijam i ulazne fakture?', a: 'Da. Ulazne fakture i fakture izdate direktno na SEF portalu se preuzimaju i povezuju sa partnerima u PSP-u.' },
      { q: 'Mogu li da fakturišem u evrima?', a: 'Možete. Dokument može biti u stranoj valuti, uz kurs, a pregled prihoda i potraživanja se prikazuje po valuti.' }
    ]
  },
  {
    slug: 'troskovi-fiskalni-racuni',
    icon: 'receipt',
    name: 'Troškovi',
    short: 'Skenirajte QR kod fiskalnog računa: prodavac, stavke i iznos stižu sami, a odobrenje ide u par klikova.',
    seoTitle: 'Troškovi sa fiskalnih računa: skeniranje QR koda',
    seoDescription:
      'Zaposleni skenira QR kod fiskalnog računa telefonom ili otpremi sliku ili PDF. Podaci stižu sa sajta Poreske uprave, trošak se odobrava i prefakturiše klijentu na predmetu.',
    title: 'Skenirajte račun.',
    titleAccent: 'Ostalo ide samo.',
    lead:
      'Zaposleni telefonom skenira QR kod fiskalnog računa ili otpremi sliku ili PDF. Prodavac, stavke, porezi i iznos stižu sa sajta Poreske uprave, a trošak ide na odobrenje.',
    screen: 'expense',
    mobile: 'm-expense-new',
    benefits: [
      { icon: 'scan', title: 'QR kamerom telefona', text: 'Skeniranje radi u pregledaču, bez instalacije posebne aplikacije.' },
      { icon: 'file', title: 'Slika ili PDF računa', text: 'Otpremite fotografiju ili e-račun u PDF-u. QR kod se pronalazi i na izgužvanim računima.' },
      { icon: 'sparkle', title: 'Podaci stižu sami', text: 'Prodavac, PIB, stavke, porezi i iznos se preuzimaju sa sajta Poreske uprave.' },
      { icon: 'check', title: 'Odobrenje po izboru', text: 'Trošak odobravaju izabrane osobe, a svako vidi zadatak sa brojačem uživo.' },
      { icon: 'briefcase', title: 'Prefakturisanje klijentu', text: 'Odobren trošak se vezuje za predmet i ulazi u sledeću fakturu.' },
      { icon: 'shield', title: 'Bez duplikata', text: 'Isti račun ne može biti unet dva puta, a nefiskalni računi se prepoznaju odmah.' }
    ],
    steps: [
      { title: 'Skenirajte', text: 'Kamera telefona, slika, PDF ili ručni unos.' },
      { title: 'Proverite', text: 'Podaci sa Poreske uprave su već popunjeni. Dodajte svrhu i predmet.' },
      { title: 'Pošaljite na odobrenje', text: 'Izabrani odobravaoci dobijaju zadatak.' },
      { title: 'Prefakturišite', text: 'Odobren trošak ide na predmet i/ili u knjigovodstvo.' }
    ],
    faq: [
      { q: 'Da li moram da instaliram aplikaciju na telefon?', a: 'Ne. PSP radi u pregledaču telefona, a skeniranje QR koda koristi kameru direktno iz pregledača.' },
      { q: 'Šta ako se QR kod ne vidi dobro?', a: 'PSP isproba više obrada slike (poravnanje pozadine, uvećanje, isecanje), pa čita i izgužvane i kompresovane fotografije. Uvek postoji i ručni unos.' },
      { q: 'Da li radi sa PDF računima?', a: 'Da. Iz PDF računa se čita QR kod sa prve tri strane. Računi za komunalije sa IPS QR kodom se prepoznaju kao nefiskalni.' }
    ]
  },
  {
    slug: 'dokumenti',
    icon: 'folder',
    name: 'Dokumenti',
    short: 'Profesionalna arhiva na Alfresco-u: dokumenti kompanije, zaposlenih i predmeta, sa pretragom po sadržaju.',
    seoTitle: 'Upravljanje dokumentima kancelarije (Alfresco DMS)',
    seoDescription:
      'Dokumenti kompanije, zaposlenih i predmeta na jednom mestu, razvrstani po kategorijama, sa pretragom po tekstu unutar dokumenata. Čuvanje u Alfresco sistemu.',
    title: 'Arhiva u kojoj',
    titleAccent: 'se sve nađe.',
    lead:
      'Dokumenti su razvrstani po vlasniku i kategoriji i čuvaju se u Alfresco-u, profesionalnom sistemu za upravljanje dokumentima. Fakture i računi troškova idu u istu arhivu.',
    screen: 'categories',
    benefits: [
      { icon: 'folder', title: 'Po vlasniku', text: 'Dokumenti kompanije, zaposlenog i predmeta, svaki na svom mestu.' },
      { icon: 'layers', title: 'Kategorije', text: 'Ugovori, punomoćja, podnesci, lična dokumenta. Kategorije definiše administrator.' },
      { icon: 'search', title: 'Pretraga po sadržaju', text: 'Pronađite dokument po rečima u tekstu, ne samo po nazivu fajla.' },
      { icon: 'shield', title: 'Pouzdano čuvanje', text: 'Alfresco je sistem za dokumente koji koriste banke, državni organi i velike firme.' },
      { icon: 'invoice', title: 'Fakture u arhivi', text: 'PDF i XML svake izdate i primljene fakture se čuvaju automatski.' },
      { icon: 'receipt', title: 'Računi troškova', text: 'Slike i PDF računi troškova su sačuvani uz sam trošak.' }
    ],
    steps: [
      { title: 'Otpremite', text: 'Prevucite fajl na predmet, zaposlenog ili kompaniju.' },
      { title: 'Razvrstajte', text: 'Izaberite kategoriju, a fascikla se pravi sama.' },
      { title: 'Pronađite', text: 'Pretražite po nazivu ili po tekstu unutar dokumenta.' }
    ],
    faq: [
      { q: 'Gde se čuvaju dokumenti?', a: 'U Alfresco sistemu za upravljanje dokumentima, na vašoj instalaciji. Podaci o dokumentima su u bazi PSP-a.' },
      { q: 'Mogu li sam da definišem kategorije?', a: 'Da. Administrator dodaje i menja kategorije, a postojeće izmene se ne gube pri ažuriranju aplikacije.' }
    ]
  },
  {
    slug: 'tim-odmori-novosti',
    icon: 'team',
    name: 'Tim, odmori i novosti',
    short: 'Zaposleni, godišnji odmori sa odobravanjem, zadaci sa brojačem uživo i interne novosti kancelarije.',
    seoTitle: 'Godišnji odmori, zadaci i interne novosti za timove',
    seoDescription:
      'Zahtevi za godišnji odmor sa zamenom i odobravanjem, kalendar rada, prenos neiskorišćenih dana, zadaci sa brojačem uživo i interne novosti sa reakcijama i komentarima.',
    title: 'Tim na okupu,',
    titleAccent: 'bez papira.',
    lead:
      'Godišnji odmori, odobrenja i interna obaveštenja više ne idu mejlom. Svaki zahtev je zadatak, brojač u meniju se ažurira uživo, a novosti stižu celoj kancelariji.',
    screen: 'leave-calendar',
    benefits: [
      { icon: 'calendar', title: 'Godišnji odmori', text: 'Zahtevi sa zamenom, jednoglasno ili delimično odobrenje, otkazivanje i raniji povratak.' },
      { icon: 'layers', title: 'Prava i prenos', text: 'Broj dana po zaposlenom, sa prenosom neiskorišćenih dana u narednu godinu.' },
      { icon: 'calendar', title: 'Kalendar rada', text: 'Praznici, neradni dani i radni vikendi, kao i timski kalendar odsustva.' },
      { icon: 'bell', title: 'Zadaci uživo', text: 'Sva odobrenja su zadaci, a brojač u meniju se menja bez osvežavanja strane.' },
      { icon: 'sparkle', title: 'Novosti', text: 'Objave, događaji i čestitke za rođendan, sa slikama, reakcijama i komentarima.' },
      { icon: 'users', title: 'Zaposleni', text: 'Pozicije, uloge i pristup kompanijama, sa uvozom i izvozom iz Excel-a.' }
    ],
    steps: [
      { title: 'Zaposleni traži odmor', text: 'Bira dane, zamenu i odobravaoce.' },
      { title: 'Odobravaoci dobijaju zadatak', text: 'Brojač u meniju se odmah povećava.' },
      { title: 'Odluka', text: 'Odobreno, delimično odobreno ili odbijeno, a stanje dana se ažurira samo.' }
    ],
    faq: [
      { q: 'Može li odmor da odobri više osoba?', a: 'Može. Odmor je odobren kada ga odobre svi izabrani odobravaoci. Ako odobre samo deo dana, važi presek njihovih odluka.' },
      { q: 'Da li se rođendani objavljuju automatski?', a: 'Samo ako zaposleni to dozvoli. Datum rođenja vide samo zaposleni, administratori i HR.' }
    ]
  },
  {
    slug: 'bezbednost',
    icon: 'shield',
    name: 'Bezbednost i kontrola',
    short: 'Uloge, više kompanija sa strogo odvojenim podacima i audit svakog važnog događaja.',
    seoTitle: 'Bezbednost podataka: uloge, više kompanija, audit',
    seoDescription:
      'Uloge za administratore, partnere, zaposlene, finansije i HR. Više pravnih lica u jednoj instalaciji sa strogo odvojenim podacima. Audit dnevnik i sopstvena instalacija za svakog klijenta.',
    title: 'Svako vidi',
    titleAccent: 'samo ono što sme.',
    lead:
      'Pristup podacima je određen ulogama i izabranom kompanijom. Svaki važan događaj se beleži, a svaki klijent dobija sopstvenu instalaciju i bazu.',
    screen: 'audit',
    benefits: [
      { icon: 'users', title: 'Uloge', text: 'Administrator, partner, zaposleni, finansije i HR, svaka sa jasnim ovlašćenjima.' },
      { icon: 'layers', title: 'Više kompanija', text: 'Više pravnih lica u jednoj instalaciji, a podaci svake su strogo odvojeni.' },
      { icon: 'search', title: 'Audit dnevnik', text: 'Ko je, šta i kada uradio: prijave, izmene, brisanja, slanja na SEF.' },
      { icon: 'lock', title: 'Zaštićene sesije', text: 'Sesije u bazi, CSRF zaštita i obavezna promena početne lozinke.' },
      { icon: 'shield', title: 'Sopstvena instalacija', text: 'Svaki klijent ima svoju instalaciju i bazu, bez deljenja sa drugima.' },
      { icon: 'bolt', title: 'Pouzdana obrada', text: 'Događaji se ne gube: obrada je transakciona i otporna na ponavljanje.' }
    ],
    steps: [
      { title: 'Prijava', text: 'Korisnik se prijavljuje i bira kompaniju u kojoj radi.' },
      { title: 'Ovlašćenja', text: 'Uloga određuje šta sme da vidi i menja.' },
      { title: 'Trag', text: 'Svaka važna akcija ostaje zabeležena u audit dnevniku.' }
    ],
    faq: [
      { q: 'Da li su naši podaci odvojeni od drugih klijenata?', a: 'Da. Svaki klijent dobija sopstvenu instalaciju i bazu podataka.' },
      { q: 'Može li administrator jedne kompanije da vidi drugu?', a: 'Ne. Administrator vidi zaposlene, predmete i dokumenta samo kompanije kojoj ima pristup.' }
    ]
  }
];

export function feature(slug: string): Feature {
  const found = features.find((f) => f.slug === slug);
  if (!found) throw new Error(`Unknown feature ${slug}`);
  return found;
}
