// Εισάγουμε τα React hooks
import { useState } from 'react';

// Εισάγουμε το hook για μεταφράσεις από το react-i18next
import { useTranslation } from 'react-i18next';

// Εισάγουμε το framer-motion για animation
import { motion } from 'framer-motion';

// Εικονίδιο υδρογείου από react-icons
import { GiEarthAmerica } from 'react-icons/gi';

// Τοπικό CSS για το component
import './LanguageSwitcher.css';


// Η κύρια component function που εξάγεται
export default function LanguageSwitcher({ onLanguageChange }) {

  // Το i18n αντικείμενο από το useTranslation, για να αλλάζουμε γλώσσα
  const { i18n } = useTranslation();

  // Τοπική κατάσταση για το αν είναι ανοιχτό το dropdown
  const [open, setOpen] = useState(false);


  // Χειριστής αλλαγής γλώσσας
  const handleLanguageChange = (lang) => {
    // Αλλαγή γλώσσας στο i18n
    i18n.changeLanguage(lang);

    // Αποθήκευση επιλογής στο localStorage για persistence
    localStorage.setItem('language', lang);

    // Κλείνουμε το dropdown
    setOpen(false);

    // Αν δοθεί callback prop, το καλούμε
    if (onLanguageChange) onLanguageChange();
  };


  // Το JSX που επιστρέφει η component
  return (
    <div className="language-switcher">
      
      {/* Κουμπί με framer-motion animation και εικονίδιο υδρογείου */}
      <motion.button
        className="globe-button"
        onClick={() => setOpen(!open)} // Ανοιγοκλείνει το dropdown
        aria-haspopup="true"           // Accessibility: δηλώνει dropdown
        aria-expanded={open}           // Accessibility: ανοιχτό/κλειστό
        aria-label="Select language"   // Περιγραφή για screen readers
        whileHover={{ rotate: 15, scale: 1.2 }} // Animation στο hover
        whileTap={{ scale: 0.9 }}                // Animation στο tap/click
        transition={{ type: 'spring', stiffness: 300 }} // Framer-motion transition
      >
        <GiEarthAmerica size={24} color="#2f3b05" />
      </motion.button>

      {/* Dropdown με επιλογές γλώσσας */}
      {open && (
        <div className="dropdown">
          <div
            tabIndex={0}                 // Προσβάσιμο με keyboard
            role="button"                // Ρόλος κουμπιού για screen readers
            onClick={() => handleLanguageChange('gr')} // Επιλογή Ελληνικών
          >
            Ελληνικά
          </div>
          <div
            tabIndex={0}
            role="button"
            onClick={() => handleLanguageChange('en')} // Επιλογή Αγγλικών
          >
            English
          </div>
        </div>
      )}
    </div>
  );
}
