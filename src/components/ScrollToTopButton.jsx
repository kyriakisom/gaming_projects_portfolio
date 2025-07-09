import React, { useState, useEffect } from 'react'; // Εισαγωγή React και hooks useState, useEffect
import './ScrollToTopButton.css'; // Εισαγωγή CSS αρχείου για στυλ κουμπιού

const ScrollToTopButton = () => {
  // Κατάσταση που καθορίζει αν το κουμπί είναι ορατό ή όχι
  const [visible, setVisible] = useState(false);

  // Χρησιμοποιούμε useEffect για να ακούσουμε το scroll event μόνο μία φορά κατά το mount
  useEffect(() => {
    // Συνάρτηση που ενεργοποιείται κάθε φορά που γίνεται scroll
    const toggleVisibility = () => {
      // Αν το scroll είναι πάνω από 300px από την κορυφή, το κουμπί γίνεται ορατό
      setVisible(window.scrollY > 300);
    };

    // Προσθήκη event listener στο παράθυρο για το scroll
    window.addEventListener('scroll', toggleVisibility);

    // Καθαρισμός event listener όταν το component αποσυναρμολογείται (unmount)
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []); // Το κενό array σημαίνει ότι το effect τρέχει μόνο 1 φορά στο mount

  // Συνάρτηση για το smooth scroll στην κορυφή όταν πατηθεί το κουμπί
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Αν το κουμπί δεν είναι ορατό, δεν το εμφανίζουμε (return null)
  if (!visible) return null;

  // Το κουμπί με τις απαραίτητες ιδιότητες
  return (
    <button
      onClick={scrollToTop}               // Εκτέλεση scrollToTop όταν πατηθεί
      aria-label="Πήγαινε πάνω"          // Προσβασιμότητα: περιγραφή κουμπιού για screen readers
      className="scroll-to-top-btn"      // CSS κλάση για το στυλ που είδες πριν
    >
      ↑                                  {/* Βελάκι προς τα πάνω */}
    </button>
  );
};

export default ScrollToTopButton; // Εξαγωγή του component για χρήση σε άλλα μέρη της εφαρμογής
