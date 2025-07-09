import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Hook για μετάφραση/πολυγλωσσικότητα
import './Testimonials.css'; // Στυλ για το component

// Σταθερά δεδομένα με μαρτυρίες πελατών
const testimonialsData = [
  {
    name: 'Maria Smantha',
    role: 'Web Developer',
    image: '/slide1.jpg', // Διαδρομή εικόνας avatar
    text: {
      gr: 'Η ομάδα ήταν εξαιρετική! Πολύ επαγγελματίες και φιλικοί. Η εμπειρία ήταν άψογη.', // Κείμενο στα ελληνικά
      en: 'The team was excellent! Very professional and friendly. The experience was flawless.', // Κείμενο στα αγγλικά
    },
    rating: 5, // Βαθμολογία σε αστέρια
  },
  {
    name: 'Lisa Kudrow',
    role: 'Graphic Designer',
    image: '/slide2.jpg',
    text: {
      gr: 'Άμεση εξυπηρέτηση και τρομερή προσοχή στη λεπτομέρεια. Θα τους προτιμήσω ξανά.',
      en: 'Prompt service and incredible attention to detail. Will choose them again.',
    },
    rating: 4,
  },
  {
    name: 'John Smith',
    role: 'Marketing Specialist',
    image: '/slide3.jpg',
    text: {
      gr: 'Πολύ καλή επικοινωνία και άψογη εξυπηρέτηση. Τους συστήνω ανεπιφύλακτα.',
      en: 'Very good communication and excellent service. Highly recommend them.',
    },
    rating: 5,
  },
];

// Κύριο component για τις μαρτυρίες
export default function Testimonials() {
  // Κατάσταση για την τρέχουσα ενεργή μαρτυρία (δείκτης)
  const [index, setIndex] = useState(0);

  // Από το react-i18next παίρνουμε το αντικείμενο i18n για να διαβάσουμε τη γλώσσα
  const { i18n } = useTranslation();
  const lang = i18n.language; // Τρέχουσα γλώσσα (πχ 'gr' ή 'en')

  // Κατάσταση για να ξέρουμε αν είναι κινητή συσκευή (με βάση πλάτος οθόνης)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect για να παρακολουθούμε αλλαγές μεγέθους παραθύρου και να ενημερώνουμε το isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize); // Προσθήκη event listener
    return () => window.removeEventListener('resize', handleResize); // Καθαρισμός κατά unmount
  }, []);

  // Συνάρτηση που πάει στην προηγούμενη μαρτυρία
  const prev = () => {
    setIndex(index === 0 ? testimonialsData.length - 1 : index - 1);
  };

  // Συνάρτηση που πάει στην επόμενη μαρτυρία
  const next = () => {
    setIndex((index + 1) % testimonialsData.length);
  };

  return (
    <section className="testimonials">
      {/* Τίτλος ενότητας που αλλάζει ανάλογα με τη γλώσσα */}
      <h2 className="title">
        {lang === 'gr' ? 'Μαρτυρίες Πελατών' : 'Customer Testimonials'}
      </h2>

      <div className="carousel">
        {/* Κουμπί πλοήγησης για προηγούμενο */}
        <button className="nav" onClick={prev}>
          {/* Αν είμαστε σε κινητό, δείχνουμε βέλος πάνω/κάτω, αλλιώς βελάκια αριστερά/δεξιά */}
          {isMobile ? '▲' : '‹'}
        </button>

        {/* Container με τις κάρτες μαρτυριών */}
        <div className="cards">
          {/* Χαρτογράφηση των δεδομένων για απόδοση κάθε κάρτας */}
          {testimonialsData.map((item, i) => (
            <div
              key={i} // Κλειδί για το React
              className={`card ${i === index ? 'active' : 'inactive'}`} // Ενεργή κάρτα έχει άλλο στυλ
              onClick={() => setIndex(i)} // Με κλικ στη κάρτα γίνεται ενεργή αυτή η μαρτυρία
            >
              <img
                src={item.image} // Εικόνα avatar
                alt={item.name} // Alt text για προσβασιμότητα
                className="avatar"
              />
              <h3 className="name">{item.name}</h3> {/* Όνομα */}
              <p className="role">{item.role}</p>   {/* Ρόλος / θέση */}
              <p className="text">“{item.text[lang]}”</p> {/* Κείμενο μαρτυρίας στη σωστή γλώσσα */}
              <p className="stars">
                {/* Εμφάνιση αστεριών: μαύρα για βαθμολογία, άσπρα για υπόλοιπα */}
                {'★'.repeat(Math.floor(item.rating))}
                {'☆'.repeat(5 - Math.floor(item.rating))}
              </p>
            </div>
          ))}
        </div>

        {/* Κουμπί πλοήγησης για επόμενο */}
        <button className="nav" onClick={next}>
          {/* Όπως και πριν, διαφορετικά σύμβολα για κινητό ή desktop */}
          {isMobile ? '▼' : '›'}
        </button>
      </div>
    </section>
  );
}
