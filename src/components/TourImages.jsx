import React from 'react';
import { useTranslation } from 'react-i18next';  // Hook για πολυγλωσσική υποστήριξη
import './TourImages.css';                      // Στυλ για το component
import { useOnScreen } from '../hooks/useOnScreen';  // Custom hook για ανίχνευση αν το στοιχείο είναι ορατό στην οθόνη

// Δεδομένα για τις περιηγήσεις: εικόνα και κείμενο σε 2 γλώσσες
const toursData = [
  {
    img: '/slide1.jpg',
    text: {
      gr: 'Αξέχαστη περιήγηση στα μονοπάτια του βουνού.',
      en: 'Unforgettable hiking tour in the mountain trails.',
    },
  },
  {
    img: '/slide2.jpg',
    text: {
      gr: 'Ανακαλύψτε τις μαγευτικές ακτές και τις παραλίες.',
      en: 'Discover the enchanting coasts and beaches.',
    },
  },
  {
    img: '/slide3.jpg',
    text: {
      gr: 'Ανακαλύψτε τις μαγευτικές ακτές και τις παραλίες.',
      en: 'Discover the enchanting coasts and beaches.',
    },
  },
];

// Κύριο component για εμφάνιση των εικόνων περιηγήσεων με κείμενο
export default function TourImages() {
  const { i18n } = useTranslation();  // Απόκτηση της τρέχουσας γλώσσας
  const lang = i18n.language;          // Αποθήκευση της τρέχουσας γλώσσας (π.χ. 'gr' ή 'en')

  return (
    <div className="tour-images-container">
      {/* Χαρτογράφηση των toursData σε στοιχεία DOM */}
      {toursData.map((tour, idx) => {
        // Χρήση του custom hook useOnScreen για να ξέρουμε αν το στοιχείο είναι ορατό στο viewport
        const [ref, visible] = useOnScreen({ threshold: 0.1 }); // threshold 0.1 σημαίνει 10% ορατότητα

        return (
          <div
            key={idx}                          // Κλειδί για τη λίστα
            ref={ref}                         // Αναφορά για το hook onScreen
            className={`
              tour-image-row                  // Βασική κλάση για κάθε γραμμή εικόνας
              ${idx % 2 === 0 ? 'left' : 'right'}  // Εναλλαγή κατεύθυνσης (left ή right) ανάλογα με τον δείκτη (ζυγός/μονός)
              ${visible ? 'fade-in-visible' : 'fade-in-hidden'}  // Κλάση για το fade-in animation ανάλογα με την ορατότητα
            `}
          >
            {/* Εικόνα της περιήγησης */}
            <img
              src={tour.img}                  // Πηγή εικόνας
              alt={`tour-${idx}`}             // Alt κείμενο με δείκτη για προσβασιμότητα
              className="tour-image"          // Κλάση στυλ εικόνας
            />
            {/* Κείμενο περιγραφής της περιήγησης, στη σωστή γλώσσα */}
            <p className="tour-text">{tour.text[lang]}</p>
          </div>
        );
      })}
    </div>
  );
}
