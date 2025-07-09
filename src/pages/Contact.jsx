import React from 'react';
// Εισαγωγή εικονιδίων από τη βιβλιοθήκη react-icons (έκδοση 6)
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaShareNodes
} from 'react-icons/fa6';

import { useTranslation } from 'react-i18next'; // hook για μετάφραση
import './Contact.css'; // στυλ για τη σελίδα επαφής

import { useOnScreen } from '../hooks/useOnScreen';  // custom hook για fade-in με Intersection Observer

export default function Contact() {
  const { i18n } = useTranslation();          // απόκτηση της τρέχουσας γλώσσας
  const lang = i18n.language || 'en';          // fallback σε 'en' αν δεν οριστεί

  // Κείμενα πολυγλωσσικά για όλο το component
  const content = {
    title: {
      gr: 'Επικοινωνία',
      en: 'Get in touch',
    },
    subtitle: {
      gr: 'Θέλεις να επικοινωνήσεις μαζί μας; Δες πώς μπορείς να το κάνεις.',
      en: "Want to reach out? Here's how you can contact us.",
    },
    callTitle: {
      gr: 'Τηλεφωνικά',
      en: 'Call us',
    },
    callText: {
      gr: 'Η ομάδα μας είναι έτοιμη να σε εξυπηρετήσει για οποιαδήποτε απορία.',
      en: 'Our team is ready to help you with any inquiries you have.',
    },
    emailTitle: {
      gr: 'Email',
      en: 'Email',
    },
    emailText: {
      gr: 'Προτιμάς να γράψεις; Στείλε μας email και θα απαντήσουμε άμεσα.',
      en: 'Prefer writing? Drop us an email and we’ll respond promptly.',
    },
    socialTitle: {
      gr: 'Κοινωνικά Δίκτυα',
      en: 'Social Media',
    },
    socialText: {
      gr: 'Μείνε σε επαφή μαζί μας μέσα από τα social media.',
      en: 'Stay in touch through our social platforms.',
    },
    mapTitle: {
      gr: 'Χάρτης Τοποθεσίας',
      en: 'Location Map',
    },
  };

  // Χρήση του custom hook useOnScreen για να παρακολουθεί αν το header είναι ορατό στην οθόνη
  // Θα χρησιμοποιηθεί για το εφέ fade-in όταν το component μπαίνει στο viewport
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.2 });

  // Το ίδιο και για το container με τις κάρτες επαφής
  const [cardsRef, cardsVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section className="contact-section">
      {/* Header της σελίδας με τίτλο και υπότιτλο */}
      <div
        ref={headerRef}  // ref για το Intersection Observer
        className={`contact-header ${headerVisible ? 'fade-in-visible' : 'fade-in-hidden'}`} // εναλλαγή κλάσεων για το fade-in εφέ
      >
        <h1 className="page-title">{content.title[lang]}</h1>    {/* Τίτλος ανάλογα με τη γλώσσα */}
        <p className="page-subtitle">{content.subtitle[lang]}</p> {/* Υπότιτλος ανάλογα με τη γλώσσα */}
      </div>

      {/* Container με τις κάρτες επαφής (τηλέφωνο, email, social media) */}
      <div
        ref={cardsRef}  // ref για το Intersection Observer
        className={`contact-wrapper ${cardsVisible ? 'fade-in-visible' : 'fade-in-hidden'}`} // εναλλαγή κλάσεων για το fade-in εφέ
      >
        <div className="cards-container">

          {/* Κάρτα τηλεφώνου */}
          <div className="card">
            <FaPhone className="icon" />                   {/* Εικονίδιο τηλεφώνου */}
            <h3>{content.callTitle[lang]}</h3>            {/* Τίτλος κάρτας */}
            <p>{content.callText[lang]}</p>                {/* Περιγραφή */}
            <a href="tel:+306999999999" className="card-link">
              +30 699 999 9999                            {/* Τηλέφωνο με σύνδεσμο κλήσης */}
            </a>
          </div>

          {/* Κάρτα email */}
          <div className="card">
            <FaEnvelope className="icon" />                 {/* Εικονίδιο φακέλου (email) */}
            <h3>{content.emailTitle[lang]}</h3>              {/* Τίτλος κάρτας */}
            <p>{content.emailText[lang]}</p>                  {/* Περιγραφή */}
            <a href="mailto:example@email.com" className="card-link">
              example@email.com                            {/* Email με σύνδεσμο αποστολής email */}
            </a>
          </div>

          {/* Κάρτα social media */}
          <div className="card">
            <FaShareNodes className="icon" />                 {/* Εικονίδιο κοινής χρήσης */}
            <h3>{content.socialTitle[lang]}</h3>               {/* Τίτλος κάρτας */}
            <p>{content.socialText[lang]}</p>                   {/* Περιγραφή */}
            <div className="social-icons">
              {/* Σύνδεσμοι προς τα κοινωνικά δίκτυα με τα αντίστοιχα εικονίδια */}
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
