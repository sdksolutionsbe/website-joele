# Joele Elektriciteit - Website

Moderne, responsive website voor Joele Elektriciteit - professionele elektriciteitswerken in Oudenaarde en de Vlaamse Ardennen.

## Quick Start

### Lokaal bekijken
Open `index.html` in een browser, of gebruik een lokale server:

```bash
# Met Python
python -m http.server 8000

# Met Node.js (npx)
npx serve

# Met VS Code
# Installeer "Live Server" extensie en klik "Go Live"
```

### Deployment naar Netlify

1. Push naar GitHub repository
2. Connect repository in Netlify
3. Deploy settings:
   - Build command: (leeg)
   - Publish directory: `.`
4. Configureer environment variables (zie onder)

## Projectstructuur

```
Website - Joele/
├── index.html              # Hoofdpagina
├── success.html            # Bedankpagina na formulier
├── netlify.toml            # Netlify configuratie
├── .env.example            # Environment variabelen template
├── .gitignore              # Git ignore regels
├── README.md               # Dit bestand
│
├── src/
│   ├── css/
│   │   └── style.css       # Alle styling
│   ├── js/
│   │   └── main.js         # JavaScript functionaliteit
│   └── images/             # Afbeeldingen (toe te voegen)
│
├── functions/
│   └── contact-form.js     # Netlify serverless function
│
└── Documentatie/
    ├── VERGELIJKINGSRAPPORT.md    # Vergelijking oude vs nieuwe site
    └── VERBETERPUNTEN-EN-TIPS.md  # Aanbevelingen en tips
```

## Features

- **Modern Design**: Clean, professionele uitstraling
- **Responsive**: Werkt op alle apparaten (mobile-first)
- **SEO Geoptimaliseerd**: Meta tags, structured data, geo tags
- **Contactformulier**: Met reCAPTCHA bescherming
- **Netlify Forms**: Automatische email notificaties
- **Performance**: Snelle laadtijden, geoptimaliseerde code
- **Accessibility**: WCAG compliant, keyboard navigatie

## Environment Variables

Configureer deze in Netlify dashboard (Site settings → Environment variables):

| Variable | Beschrijving |
|----------|--------------|
| `RECAPTCHA_SITE_KEY` | Google reCAPTCHA v2 site key |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v2 secret key |
| `CONTACT_EMAIL` | Email voor formulier notificaties |

## reCAPTCHA Configuratie

1. Ga naar https://www.google.com/recaptcha/admin
2. Registreer nieuwe site (reCAPTCHA v2 - "I'm not a robot")
3. Voeg domeinen toe (localhost voor testing, joele.be voor productie)
4. Kopieer Site Key naar `index.html` (regel met `data-sitekey`)
5. Voeg Secret Key toe aan Netlify environment variables

## Email Notificaties

Formulierinzendingen worden automatisch verstuurd naar het geconfigureerde emailadres via Netlify Forms.

### Configuratie in Netlify:
1. Site settings → Forms → Form detection: Enabled
2. Form notifications → Add notification → Email
3. Form: contact
4. Email to: stijn.de.ketelaere@pandora.be

## Benodigde Afbeeldingen

Plaats in `src/images/`:

| Bestand | Formaat | Beschrijving |
|---------|---------|--------------|
| `hero-bg.jpg` | 1920x1080 | Hero achtergrond |
| `logo.png` | 200x60 | Website logo |
| `favicon.svg` | SVG | Browser tab icon |
| `apple-touch-icon.png` | 180x180 | iOS icon |
| `og-image.jpg` | 1200x630 | Social sharing |
| `joeri-maes.jpg` | 800x1000 | Profielfoto |

## Onderhoud

### Content wijzigen
Bewerk `index.html` rechtstreeks voor tekstuele aanpassingen.

### Styling wijzigen
Alle CSS staat in `src/css/style.css` met CSS variables voor eenvoudige theming.

### Statistieken bijwerken
Update de hero statistieken in `index.html`:
- Jaren ervaring
- Aantal klanten
- Keuring percentage

## Browser Support

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)
- Mobile browsers (iOS Safari, Android Chrome)

## Licentie

Alle rechten voorbehouden - Joele Elektriciteit
