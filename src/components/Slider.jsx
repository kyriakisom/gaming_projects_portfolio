import React, { useState, useEffect, useRef } from 'react'; 
// Εισαγωγή React και hooks: useState για κατάσταση, useEffect για side effects, useRef για mutable ref αντικείμενο

const Slider = ({ images, autoSlideInterval = 3000 }) => {
  // Κατάσταση για την τρέχουσα εικόνα που εμφανίζεται
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Ref για την αποθήκευση του timeout ώστε να μπορεί να καθαριστεί
  const slideTimeout = useRef(null);

  // useEffect που τρέχει κάθε φορά που αλλάζει το currentIndex
  useEffect(() => {
    // Ξεκινάει αυτόματο slide
    startAutoSlide();

    // Καθαρισμός του timeout όταν το component αποσυναρμολογείται ή πριν την επόμενη εκτέλεση του effect
    return () => clearTimeout(slideTimeout.current);
  }, [currentIndex]); // Εξαρτάται από το currentIndex

  // Συνάρτηση για να ξεκινήσει ή να επανεκκινήσει το αυτόματο slide
  const startAutoSlide = () => {
    // Καθαρισμός προηγούμενου timeout για αποφυγή πολλαπλών ταυτόχρονων timeouts
    clearTimeout(slideTimeout.current);

    // Ορισμός νέου timeout για αλλαγή slide μετά το χρονικό διάστημα autoSlideInterval
    slideTimeout.current = setTimeout(() => {
      // Ενημέρωση του currentIndex: αν είμαστε στην τελευταία εικόνα πάμε στην πρώτη, αλλιώς πάμε στην επόμενη
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);
  };

  // Συνάρτηση για αλλαγή slide μέσω κλικ σε pagination dot
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        position: 'relative',      // Για να μπορεί να τοποθετηθεί απόλυτα το pagination
        overflow: 'hidden',        // Απόκρυψη των εικόνων που δεν είναι στο viewport
        width: '100%',             // Πλάτος 100% του container
        maxWidth: '800px',         // Μέγιστο πλάτος slider
        margin: 'auto',            // Κεντράρισμα slider οριζόντια
      }}
    >
      {/* Container των εικόνων σε σειρά (flex) που κινείται με translateX */}
      <div
        style={{
          display: 'flex',                          // Εμφάνιση των εικόνων σε σειρά οριζόντια
          transition: 'transform 0.5s ease-in-out', // Ομαλή μετάβαση της κίνησης
          transform: `translateX(-${currentIndex * 100}%)`, // Μετατόπιση container ανάλογα με το τρέχον index (slide)
          width: `${images.length * 100}%`,         // Το συνολικό πλάτος είναι όσο οι εικόνες επί 100% (για να χωράνε όλες στη σειρά)
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}                     // Κλειδί για κάθε στοιχείο στη λίστα
            style={{
              flex: '0 0 100%',           // Κάθε εικόνα καταλαμβάνει το 100% του container (μια εικόνα ανά "σελίδα")
              maxWidth: '100%',           // Μην ξεφύγει το πλάτος
            }}
          >
            {img /* Εδώ το img είναι JSX του image που περνάς από Home.jsx ή άλλο component */}
          </div>
        ))}
      </div>

      {/* Pagination dots κάτω από το slider */}
      <div
        style={{
          position: 'absolute',           // Απόλυτη θέση μέσα στο slider container
          bottom: '10px',                 // 10px από κάτω
          left: '50%',                   // Στο οριζόντιο κέντρο
          transform: 'translateX(-50%)', // Μετατόπιση προς τα αριστερά κατά 50% για να κεντραριστεί
          display: 'flex',                // Τα dots σε σειρά
          gap: '8px',                    // Απόσταση μεταξύ των dots
        }}
      >
        {images.map((_, idx) => (
          <div
            key={idx}                   // Κλειδί για κάθε dot
            onClick={() => goToSlide(idx)} // Αλλαγή slide με κλικ στο dot
            style={{
              width: '10px',            // Πλάτος dot
              height: '10px',           // Ύψος dot
              borderRadius: '50%',      // Στρογγυλό σχήμα (κύκλος)
              background: idx === currentIndex ? '#7ba11e' : '#ccc', // Χρώμα ανάλογα αν είναι ενεργό ή όχι
              cursor: 'pointer',        // Δείκτης χειρός για να δείξει ότι είναι clickable
              transition: 'background-color 0.3s ease', // Ομαλή αλλαγή χρώματος στα dots
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider; // Εξαγωγή του Slider component για χρήση σε άλλα μέρη της εφαρμογής
