import { useState, useEffect, useRef } from 'react';

// Custom hook που επιστρέφει ένα ref και μια boolean τιμή αν το στοιχείο είναι ορατό στο viewport
export function useOnScreen(options) {
  const ref = useRef(null);                 // Δημιουργούμε ref για να το δώσουμε στο DOM στοιχείο που θέλουμε να παρακολουθήσουμε
  const [isVisible, setIsVisible] = useState(false);  // Κατάσταση για το αν το στοιχείο είναι ορατό ή όχι

  useEffect(() => {
    // Δημιουργία IntersectionObserver με callback που παίρνει ένα array entries, εδώ αποσυσκευάζουμε το πρώτο entry
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);  // Ορίζουμε την κατάσταση ανάλογα με το αν το στοιχείο τέμνει το viewport
    }, options);                          // Οι επιλογές (π.χ. threshold) δίνονται από το caller

    // Αν το ref έχει ανατεθεί σε κάποιο DOM στοιχείο, ξεκινάμε την παρακολούθησή του
    if (ref.current) observer.observe(ref.current);

    // Καθαρισμός όταν το component ξεφορτωθεί ή αλλάξει το ref/options
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);  // Εξαρτήσεις: ref και options

  // Επιστρέφουμε το ref για να το συνδέσουμε με το στοιχείο και το boolean αν είναι ορατό
  return [ref, isVisible];
}
