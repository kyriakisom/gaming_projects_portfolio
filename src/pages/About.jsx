import React from 'react';                       // Εισαγωγή React για JSX
import { useTranslation } from 'react-i18next';  // Hook για πολυγλωσσική υποστήριξη
import './About.css';                             // Εισαγωγή CSS για το component

import topImage from '../assets/slide1.jpg';     // Εισαγωγή εικόνας για πάνω τμήμα
import bottomImage from '../assets/slide2.jpg';  // Εισαγωγή εικόνας για κάτω τμήμα
import { useOnScreen } from '../hooks/useOnScreen'; // Custom hook για ανίχνευση ορατότητας στοιχείων
import { Link } from 'react-router-dom';         // ✅ Χρήση Link για navigation χωρίς reload

// Δεδομένα για την About section, με κείμενα στα ελληνικά και αγγλικά
const aboutData = {
  title: {
    gr: 'Καλώς ήρθατε στο HomeNest Rentals!',
    en: 'Welcome to HomeNest Rentals!',
  },
  paragraphs: [
    {
      gr: 'Το HomeNest Rentals είναι η αξιόπιστη επιλογή σας για την εύρεση του ιδανικού σπιτιού προς ενοικίαση...',
      en: 'HomeNest Rentals is your trusted choice for finding the ideal rental home...',
    },
    {
      gr: 'Είτε αναζητάτε το πρώτο σας σπίτι...',
      en: 'Whether you are looking for your first home...',
    },
    {
      gr: 'Με αφοσίωση στην ποιότητα και τη διαφάνεια...',
      en: 'With a commitment to quality and transparency...',
    },
    {
      gr: 'Αφήστε μας να σας βοηθήσουμε να βρείτε το σπίτι...',
      en: 'Let us help you find the home...',
    },
  ],
  button: {
    gr: 'Επικοινωνήστε σήμερα',
    en: 'Contact us Today',
  },
  sideLabel: {
    gr: 'Σχετικά με εμάς',
    en: 'About us',
  },
};

export default function About() {
  const { i18n } = useTranslation();          // Παίρνουμε το αντικείμενο i18n από το hook
  const lang = i18n.language;                  // Τρέχουσα γλώσσα (πχ 'gr' ή 'en')

  // Χρήση του useOnScreen hook για να ανιχνεύσουμε πότε τα τμήματα γίνονται ορατά στο viewport
  const [topRef, topVisible] = useOnScreen({ threshold: 0.2 });
  const [middleRef, middleVisible] = useOnScreen({ threshold: 0.2 });
  const [bottomRef, bottomVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section className="about-section">
      {/* === Top Section === */}
      <div
        ref={topRef}    // Σύνδεση ref για ανίχνευση ορατότητας
        className={`top-section ${topVisible ? 'fade-in-visible' : 'fade-in-hidden'}`} // Προσθήκη κλάσης για animation
      >
        <div className="top-left">
          <h1>{aboutData.title[lang]}</h1> {/* Τίτλος στα ανάλογα γλώσσα */}
        </div>
        <div className="top-right">
          <img src={topImage} alt="HomeNest" /> {/* Εικόνα δεξιά */}
        </div>
      </div>

      {/* === Middle Section === */}
      <div
        ref={middleRef}  // ref και animation για το μεσαίο τμήμα
        className={`middle-section ${middleVisible ? 'fade-in-visible' : 'fade-in-hidden'}`}
      >
        <div className="side-label">
          <span>{aboutData.sideLabel[lang]}</span> {/* Κάθετο label με κείμενο */}
        </div>
        <div className="about-text">
          {/* Χάρτης για να εμφανίσουμε όλες τις παραγράφους ανάλογα με τη γλώσσα */}
          {aboutData.paragraphs.map((p, idx) => (
            <p key={idx}>{p[lang]}</p>           // Παράγραφος με key και κατάλληλο κείμενο
          ))}
        </div>
      </div>

      {/* === Bottom Section === */}
      <div
        ref={bottomRef} // ref και animation για κάτω τμήμα
        className={`bottom-section ${bottomVisible ? 'fade-in-visible' : 'fade-in-hidden'}`}
      >
        <div className="bottom-left">
          <img src={bottomImage} alt="Rental Homes" /> {/* Εικόνα αριστερά */}
        </div>
        <div className="bottom-right">
          {/* ✅ Χρήση Link αντί για <a href> για εσωτερική πλοήγηση χωρίς reload */}
          <Link to="/contact" className="about-button">
            {aboutData.button[lang]} {/* Κείμενο κουμπιού */}
          </Link>
        </div>
      </div>
    </section>
  );
}
