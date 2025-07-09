// Εισάγουμε το αρχείο CSS που περιέχει τα στυλ για το Footer
import './Footer.css';

// Ορίζουμε και εξάγουμε την συνιστώσα (component) Footer ως default export
export default function Footer() {
  // Επιστρέφουμε το JSX που αντιπροσωπεύει το footer
  // Χρησιμοποιούμε το στοιχείο <footer> με className "footer"
  // Το περιεχόμενο περιλαμβάνει το σύμβολο © και το τρέχον έτος
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} My Site
    </footer>
  );
}
