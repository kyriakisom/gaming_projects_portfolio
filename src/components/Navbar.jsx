// Εισάγουμε απαραίτητα hooks και βιβλιοθήκες
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import logo from '../assets/react.svg';

import './Navbar.css';

// Ορισμός του functional component Navbar
const Navbar = () => {
  // Από το react-i18next παίρνουμε τη συνάρτηση μετάφρασης
  const { t } = useTranslation();

  // Κατάσταση για το αν είναι ανοιχτό το mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Κατάσταση για την αποθήκευση της προηγούμενης θέσης scroll
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  // Κατάσταση για το αν είναι ορατή η navbar (εμφάνιση/κρύψιμο στο scroll)
  const [visible, setVisible] = useState(true);

  // Συνάρτηση για toggle στο mobile menu (άνοιγμα/κλείσιμο)
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Συνάρτηση για κλείσιμο του mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // useEffect για να χειριζόμαστε την εμφάνιση/εξαφάνιση της navbar στο scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Αν κάνουμε scroll προς τα πάνω ή είμαστε πολύ κοντά στην κορυφή
      const isScrollingUp = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    // Προσθέτουμε listener στο scroll
    window.addEventListener('scroll', handleScroll);

    // Καθαρίζουμε τον listener στο unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Το JSX που επιστρέφει το component
  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="navbar-content">

        {/* ===== DESKTOP MENU ===== */}
        <div className="nav-left desktop-menu">
          {/* Link για Home */}
          <Link to="/">{t('home')}</Link>

          {/* Link για Projects/Portfolio */}
          <Link to="/portfolio-tours">{t('projects')}</Link>

          {/* Link για About */}
          <Link to="/about">{t('about')}</Link>

          {/* Το λογότυπο στο κέντρο */}
          <div className="nav-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Link για Services */}
          <Link to="/services">{t('services')}</Link>

          {/* Link για Contact */}
          <Link to="/contact">{t('contact')}</Link>

          {/* Language Switcher για desktop */}
          <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
            <LanguageSwitcher />
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div className="responsive-menu">
          
          {/* Λογότυπο στο mobile */}
          <div className="mobile-logo-language">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Mobile Logo" />
            </Link>
          </div>

          {/* Hamburger button για άνοιγμα/κλείσιμο mobile menu */}
          <button className="hamburger" onClick={toggleMenu} aria-label={t('menu')}>
            <span className="hamburger-text">{t('menu')}</span>
            ☰
          </button>

          {/* Overlay (σκοτεινιάζει το background όταν είναι ανοιχτό το μενού) */}
          {menuOpen && (
            <div className="mobile-overlay show" onClick={closeMenu}></div>
          )}

          {/* Το πραγματικό slide-in mobile menu */}
          <div className={`mobile-menu ${menuOpen ? 'slide-in' : ''}`}>
            
            {/* Header του mobile menu με Language Switcher και κουμπί κλεισίματος */}
            <div className="mobile-menu-header">
              <div className="language-switcher-mobile">
                <LanguageSwitcher />
              </div>
              
              {/* Κουμπί για κλείσιμο του μενού */}
              <button className="close-menu" onClick={closeMenu} aria-label={t('close')}>
                &times;
              </button>
            </div>

            {/* Links για mobile */}
            <Link to="/" onClick={closeMenu}>{t('home')}</Link>
            <Link to="/portfolio-tours" onClick={closeMenu}>{t('projects')}</Link>
            <Link to="/about" onClick={closeMenu}>{t('about')}</Link>
            <Link to="/services" onClick={closeMenu}>{t('services')}</Link>
            <Link to="/contact" onClick={closeMenu}>{t('contact')}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Εξάγουμε το component
export default Navbar;
