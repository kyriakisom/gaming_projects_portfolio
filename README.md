# React + Vite + Tailwind CSS Πολυγλωσσική Εφαρμογή

Αυτή η εφαρμογή είναι μια μοντέρνα Single Page Application (SPA) φτιαγμένη με React, που χρησιμοποιεί το Vite για ανάπτυξη και build, το Tailwind CSS για γρήγορο και ευέλικτο styling, καθώς και το react-i18next για υποστήριξη πολλαπλών γλωσσών (Ελληνικά και Αγγλικά).

---

## Περιεχόμενα

- [Προαπαιτούμενα](#προαπαιτούμενα)  
- [Εγκατάσταση](#εγκατάσταση)  
- [Εκτέλεση](#εκτέλεση)  
- [Δομή Φακέλων](#δομή-φακέλων)  
- [Σημαντικές Ρυθμίσεις](#σημαντικές-ρυθμίσεις)  
- [Χρήσιμες Εντολές](#χρήσιμες-εντολές)  
- [Troubleshooting](#troubleshooting)  
- [Άδεια](#άδεια)

---

## Προαπαιτούμενα

- **Node.js** έκδοση 14 ή ανώτερη (προτείνεται LTS)  
- npm ή yarn

---

## Εγκατάσταση

### Μετακίνηση στον φάκελο του έργου:

```bash
cd <όνομα-φακέλου>
```

### Εγκατάσταση εξαρτήσεων:

Με npm:

```bash
npm install
```

ή, αν χρησιμοποιείς yarn:

```bash
yarn
```

## Εκτέλεση

### Development Server

Για να ξεκινήσεις το development περιβάλλον με αυτόματη ανανέωση (hot reload):

Με npm:

```bash
npm run dev
```

ή με yarn:

```bash
yarn dev
```

Άνοιξε τον browser και πήγαινε στο http://localhost:5173.

### Build για Παραγωγή (Production)

Με npm:

```bash
npm run build
```

ή με yarn:

```bash
yarn build
```

### Προβολή Build τοπικά

Με npm:

```bash
npm run preview
```

ή με yarn:

```bash
yarn preview
```

## Δομή Φακέλων

```
/public
  - vite.svg
  - index.html

/src
  /components
    - Navbar.jsx
    - Footer.jsx
    - ScrollToTopButton.jsx
    - Testimonials.jsx
    - (...)
  /pages
    - Home.jsx
    - Portfolio.jsx
    - Services.jsx
    - About.jsx
    - Contact.jsx

  App.jsx
  main.jsx
  i18n.js
  index.css

tailwind.config.js
vite.config.js
App.css
```

## Σημαντικές Ρυθμίσεις

### Tailwind CSS

- Custom χρώματα (olive, ivory, charcoal)
- @tailwind base, components, utilities στο index.css
- Κλάσεις με @apply

### Routing

- react-router-dom με BrowserRouter
- Routes: /, /portfolio-tours, /about, /services, /contact

### Πολυγλωσσικότητα (i18n)

- Βιβλιοθήκη react-i18next
- Υποστηρίζει Ελληνικά (gr) και Αγγλικά (en)
- Μεταφράσεις σε components ή αρχεία

### Styling

- Tailwind + App.css
- Fixed navbar, footer
- Responsive design

## Χρήσιμες Εντολές

| Εντολή            | Περιγραφή |
|-------------------|-----------|
| npm run dev       | Ανάπτυξη με hot reload |
| npm run build     | Production build |
| npm run preview   | Προβολή build |
| npm install       | Εγκατάσταση dependencies |

## Troubleshooting

- Διέγραψε `node_modules` και `package-lock.json` / `yarn.lock` αν υπάρχουν σφάλματα
- Έλεγξε paths στο tailwind.config.js
- Βεβαιώσου ότι το `<Router>` τυλίγει όλη την εφαρμογή
- Έλεγξε τα namespaces στο i18n
