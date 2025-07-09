// App.jsx

// Εισαγωγή των βασικών components και βιβλιοθηκών από react-router-dom για τη διαχείριση των routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Εισαγωγή των σελίδων της εφαρμογής
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Εισαγωγή κοινών components που θα εμφανίζονται σε όλες τις σελίδες
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Ανενεργό προς το παρόν component για ενσωμάτωση Instagram feed
// import InstagramFeed  from './components/InstagramFeed';

// Εισαγωγή γενικών στυλ της εφαρμογής
import './App.css';

function App() {
  return (
    // Router για να ενεργοποιηθεί η πλοήγηση μεταξύ των σελίδων
    <Router>
      {/* Εδώ μπορεί να προστεθεί επιλογέας γλώσσας */}
      {/* <LanguageSwitcher /> */}

      {/* Navbar που εμφανίζεται σε όλες τις σελίδες, συνήθως στην κορυφή */}
      <Navbar />

      {/* Ορισμός των διαδρομών (routes) της εφαρμογής */}
      <Routes>
        {/* Αρχική σελίδα */}
        <Route path="/" element={<Home />} />

        {/* Σελίδα portfolio με διαδρομή /portfolio-tours */}
        <Route path="/portfolio-tours" element={<Portfolio />} />

        {/* Σελίδα "About" */}
        <Route path="/about" element={<About />} />

        {/* Σελίδα υπηρεσιών */}
        <Route path="/services" element={<Services />} />

        {/* Σελίδα επικοινωνίας */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Ανενεργό προς το παρόν Instagram feed */}
      {/* <InstagramFeed /> */}

      {/* Κουμπί για γρήγορη επιστροφή στην κορυφή της σελίδας */}
      <ScrollToTopButton />

      {/* Footer που εμφανίζεται σε όλες τις σελίδες, συνήθως στο κάτω μέρος */}
      <Footer />
    </Router>
  );
}

// Εξαγωγή του App component για χρήση σε index.js ή άλλο αρχείο εισόδου
export default App; // ✅ ΠΡΟΣΘΗΚΗ ΕΔΩ
