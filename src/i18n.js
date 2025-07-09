import i18n from 'i18next'; // Εισαγωγή της βιβλιοθήκης i18next για διεθνικοποίηση (i18n)
import { initReactI18next } from 'react-i18next'; // Εισαγωγή του adapter για React

// Ορισμός των μεταφράσεων για τις διαθέσιμες γλώσσες
const resources = {
  en: { // Αγγλικά
    translation: {
      home: "Home",
      contact: "Contact",
      about: "About",
      services: "Services",
      tours: "Projects",
      homeTitle: "Welcome!",
      menu: "Menu",
      projects: "Projects",
      portfolioSubtitle: "Discover unique destinations from around the world.",
      portfolioInstruction: "Click each image to view the exact location on the map."
    }
  },
  gr: { // Ελληνικά
    translation: {
      home: "Αρχική",
      contact: "Επικοινωνία",
      about: "Σχετικά με εμάς",
      services: "Υπηρεσίες",
      tours: "Έργα",
      homeTitle: "Καλώς Ορίσατε!",
      projects: "Έργα",
      menu: "Μενού",
      portfolioSubtitle: "Ανακαλύψτε μοναδικές τοποθεσίες απ’ όλο τον κόσμο.",
      portfolioInstruction: "Κάντε κλικ σε κάθε εικόνα για να δείτε την τοποθεσία στον χάρτη."
    }
  }
};

// Ανάκτηση της γλώσσας που έχει αποθηκευτεί τοπικά από τον χρήστη, ή fallback στα ελληνικά ('gr')
const savedLanguage = localStorage.getItem('language') || 'gr';

// Αρχικοποίηση της διεθνικοποίησης
i18n
  .use(initReactI18next) // Συνδέουμε το i18n με το React μέσω του initReactI18next
  .init({
    resources,          // Ορίζουμε τις διαθέσιμες μεταφράσεις
    lng: savedLanguage, // Ορίζουμε την τρέχουσα γλώσσα
    fallbackLng: 'en',  // Αν δεν υπάρχει μετάφραση στη γλώσσα που έχει οριστεί, πέφτει στα αγγλικά
    interpolation: {
      escapeValue: false // Απενεργοποίηση escape για ασφαλή χρήση σε React (για αποφυγή διπλού escaping)
    }
  });

// Εξαγωγή του διαμορφωμένου i18n instance για χρήση στην εφαρμογή
export default i18n;
