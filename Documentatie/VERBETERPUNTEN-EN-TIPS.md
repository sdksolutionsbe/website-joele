# Verbeterpunten & Tips voor Joele Elektriciteit Website

Dit document bevat aanbevelingen om de website nog effectiever te maken en meer klanten aan te trekken.

---

## 1. Foto's & Beeldmateriaal

### Huidige Situatie
De website gebruikt momenteel **placeholders** voor afbeeldingen. Goede foto's zijn essentieel voor een professionele uitstraling.

### Benodigde Foto's

#### Prioriteit 1 - Essentieel
| Type | Beschrijving | Specificaties |
|------|--------------|---------------|
| **Profielfoto Joeri** | Professionele portretfoto | 800x1000px, hoge kwaliteit, vriendelijke uitstraling, evt. met werkkleding |
| **Hero achtergrond** | Sfeerbeeld elektriciteitswerk of gereedschap | 1920x1080px, lichte achtergrond, modern |
| **Logo** | Officieel Joele logo | SVG formaat voor schaalbaarheid |
| **Favicon** | Klein logo/icoon | 32x32px en 180x180px (Apple touch icon) |
| **OG Image** | Social sharing afbeelding | 1200x630px met logo en tagline |

#### Prioriteit 2 - Aanbevolen
| Type | Beschrijving | Aantal |
|------|--------------|--------|
| **Projectfoto's** | Afgewerkte installaties | 4-6 foto's |
| **Werk in uitvoering** | Joeri aan het werk | 2-3 foto's |
| **Materiaal** | Kwaliteitsmaterialen, verdeelkasten | 2-3 foto's |
| **Voor/na** | Renovatieprojecten | 2-3 sets |

### Tips voor Goede Foto's

1. **Licht**: Gebruik natuurlijk daglicht of goede werkverlichting
2. **Opruimen**: Zorg dat de werkplek netjes is op foto's
3. **Perspectief**: Neem foto's op ooghoogte of licht van boven
4. **Kwaliteit**: Minimaal smartphone met goede camera (iPhone 12+ of equivalent)
5. **Toestemming**: Vraag klanten om toestemming voor publicatie

### Professionele Fotografie (Optioneel)
Overweeg een professionele fotograaf in te huren voor:
- Portretfoto Joeri
- 5-10 projectfoto's
- Geschatte kost: €200-400 voor een halve dag

---

## 2. Content Verbeteringen

### Google Reviews
**Zeer belangrijk voor lokale SEO!**

#### Actieplan
1. Maak een Google Mijn Bedrijf account aan (als nog niet aanwezig)
2. Vraag tevreden klanten actief om een review
3. Stuur na elk project een bedankmail met review-link
4. Reageer op alle reviews (positief én negatief)

#### Review Request Template
```
Beste [Naam],

Bedankt voor het vertrouwen in Joele Elektriciteit voor uw [type werk].
Bent u tevreden over onze service? Dan zou ik het zeer waarderen als u
een korte review wilt achterlaten op Google.

[Link naar Google Reviews]

Met vriendelijke groet,
Joeri Maes
```

### Testimonials
Voeg 3-5 klantengetuigenissen toe aan de website:
- Naam en plaats
- Type project
- Korte quote over ervaring

### Extra Content Ideeën
- **Blog/Tips sectie**: SEO-waardevolle content over elektriciteit
  - "Wanneer moet ik mijn elektrische installatie vernieuwen?"
  - "5 signalen dat u een elektricien nodig heeft"
  - "Kosten elektrische keuring: wat kunt u verwachten?"
- **FAQ sectie**: Veelgestelde vragen beantwoorden
- **Werkgebied pagina**: Specifieke pagina's voor gemeenten (SEO)

---

## 3. Technische Verbeteringen

### Google Analytics 4
Installeer GA4 voor bezoekersanalyse:

```html
<!-- Voeg toe in <head> na reCAPTCHA script -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console
1. Registreer de website bij Search Console
2. Submit de sitemap
3. Monitor zoekverkeer en problemen

### reCAPTCHA Configuratie
1. Ga naar https://www.google.com/recaptcha/admin
2. Registreer de site met reCAPTCHA v2
3. Vervang `YOUR_RECAPTCHA_SITE_KEY` in index.html
4. Voeg secret key toe in Netlify environment variables

---

## 4. Marketing & Zichtbaarheid

### Gratis Acties

#### Google Mijn Bedrijf (Essentieel!)
- [ ] Account aanmaken/claimen
- [ ] Alle informatie invullen
- [ ] Foto's toevoegen
- [ ] Openingsuren instellen
- [ ] Diensten toevoegen
- [ ] Regelmatig posts plaatsen

#### Social Media
- [ ] Facebook bedrijfspagina aanmaken
- [ ] Instagram account (voor/na foto's)
- [ ] LinkedIn profiel updaten met bedrijfsinfo

#### Lokale Directories
Registreer op:
- Gouden Gids / Witte Gids
- Yelp
- TrustPilot
- 2dehands.be (diensten)
- Lokale gemeentewebsites

### Betaalde Opties

#### Google Ads (Aanbevolen voor snelle resultaten)
- Budget: €300-500/maand
- Focus op: "elektricien Oudenaarde", "elektriciteitswerken"
- Verwacht: 10-30 leads/maand

#### Facebook Ads
- Budget: €100-200/maand
- Doelgroep: Huiseigenaren in regio Oudenaarde
- Formaat: Carrousel met projectfoto's

---

## 5. Netlify Deployment Stappenplan

### Stap 1: GitHub Repository
```bash
cd "Website - Joele"
git init
git add .
git commit -m "Initial commit: Nieuwe Joele website"
git remote add origin https://github.com/[username]/joele-website.git
git push -u origin main
```

### Stap 2: Netlify Setup
1. Log in op https://app.netlify.com
2. Klik "Add new site" → "Import an existing project"
3. Kies GitHub en selecteer de repository
4. Build settings:
   - Build command: (leeg laten)
   - Publish directory: `.`
5. Klik "Deploy site"

### Stap 3: Environment Variables
In Netlify dashboard → Site settings → Environment variables:
- `RECAPTCHA_SECRET_KEY`: [Je secret key]
- `CONTACT_EMAIL`: stijn.de.ketelaere@pandora.be

### Stap 4: Forms Configuratie
1. Site settings → Forms → Form detection: Enabled
2. Form notifications → Add notification → Email notification
3. Set recipient: stijn.de.ketelaere@pandora.be

### Stap 5: Custom Domain (Later)
1. Domain settings → Add custom domain
2. Voeg `joele.be` en `www.joele.be` toe
3. Configureer DNS bij domeinprovider:
   - A record: `@` → Netlify IP
   - CNAME: `www` → `[site].netlify.app`
4. Enable HTTPS (automatisch via Netlify)

---

## 6. Onderhoud Checklist

### Maandelijks
- [ ] Google Analytics bekijken
- [ ] Formulierinzendingen verwerken
- [ ] Controleren op broken links
- [ ] Reviews beantwoorden

### Per Kwartaal
- [ ] Content updaten indien nodig
- [ ] Nieuwe projectfoto's toevoegen
- [ ] SEO prestaties evalueren
- [ ] Security updates checken

### Jaarlijks
- [ ] Copyright jaartal updaten in footer
- [ ] Statistieken in hero bijwerken
- [ ] Algemene content refresh
- [ ] Design trends evalueren

---

## 7. Prioriteitenlijst

### Nu Doen (Kritisch)
1. ✅ Website development (gedaan)
2. ⏳ Profielfoto en basis afbeeldingen verzamelen
3. ⏳ reCAPTCHA configureren
4. ⏳ Netlify deployment

### Binnen 1 Week
1. Google Mijn Bedrijf optimaliseren
2. Google Analytics installeren
3. Eerste reviews verzamelen

### Binnen 1 Maand
1. Extra projectfoto's toevoegen
2. Facebook pagina opzetten
3. Lokale directories registratie

### Op Termijn
1. Blog/content marketing starten
2. Google Ads campagne overwegen
3. Testimonials sectie toevoegen

---

## 8. Kostenraming Optionele Verbeteringen

| Item | Kost | Prioriteit |
|------|------|------------|
| Professionele fotografie | €200-400 | Hoog |
| Google Ads (per maand) | €300-500 | Medium |
| Facebook Ads (per maand) | €100-200 | Laag |
| Premium logo ontwerp | €150-300 | Optioneel |
| **Totaal eenmalig** | **€350-700** | |
| **Totaal maandelijks** | **€0-700** | |

---

## Contactinformatie voor Vragen

Voor technische vragen over de website of hulp bij deployment:
- Repository: [GitHub link na upload]
- Hosting: Netlify (gratis tier is voldoende)

---

*Document bijgewerkt: December 2024*
