'use client';

import React, { useRef, useEffect, useState } from 'react';
// Import Swiper components with aliases for better readability
import { Swiper as Carousel, SwiperSlide as CarouselSlide } from 'swiper/react';
// Import Swiper modules needed for effects, pagination and navigation
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// Import translation hook for multi-language support
import { useTranslation } from 'react-i18next';

// Import Swiper styles for different modules
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import a custom component that might show additional images or info
import TourImages from '../components/TourImages';

// Import the CSS specific to this Portfolio component
import './Portfolio.css';

// Data array containing image details, embed URLs for maps, and multilingual text
const imageData = [
  {
    src: '/slide1.jpg',
    embedUrl: 'https://www.google.com/maps/place/Kerkis/@37.7897342,26.7052662,3a,75y,161.11h,105.41t/data=!3m7!...',
    title: { gr: 'Όρος Κέρκης', en: 'Mount Kerkis' },
    description: { gr: 'Το ψηλότερο βουνό της Σάμου.', en: 'The highest mountain of Samos.' },
  },
  {
    src: '/slide2.jpg',
    embedUrl: 'https://www.google.com/maps?q=48.8566,2.3522',
    title: { gr: 'Παρίσι', en: 'Paris' },
    description: { gr: 'Η πόλη του φωτός.', en: 'The city of light.' },
  },
  {
    src: '/slide3.jpg',
    embedUrl: 'https://www.google.com/maps?q=35.6895,139.6917',
    title: { gr: 'Τόκιο', en: 'Tokyo' },
    description: { gr: 'Η πρωτεύουσα της Ιαπωνίας.', en: 'The capital of Japan.' },
  },
  {
    src: '/slide4.jpg',
    embedUrl: 'https://www.google.com/maps?q=51.5074,-0.1278',
    title: { gr: 'Λονδίνο', en: 'London' },
    description: { gr: 'Η πόλη με τον μεγάλο ποταμό.', en: 'The city with the great river.' },
  },
  {
    src: '/slide5.jpg',
    embedUrl: 'https://www.google.com/maps?q=37.9838,23.7275',
    title: { gr: 'Αθήνα', en: 'Athens' },
    description: { gr: 'Η γενέτειρα της δημοκρατίας.', en: 'The birthplace of democracy.' },
  },
];

export default function Portfolio() {
  // Reference to the portfolio section element for intersection observer
  const sectionRef = useRef(null);
  // Reference to the Swiper instance for controlling navigation programmatically
  const carouselRef = useRef(null);
  // i18n hook to get current language and translation function
  const { i18n, t } = useTranslation();
  const lang = i18n.language; // Current language code (e.g. 'en' or 'gr')

  // State to track if the portfolio section is visible (for fade-in animation)
  const [visible, setVisible] = useState(false);
  // State to detect if the current viewport width is mobile or desktop
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check window size and update isMobile state on resize
  useEffect(() => {
    // Function to update isMobile based on window width
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Run once on mount
    window.addEventListener('resize', checkMobile); // Listen for resize changes
    return () => window.removeEventListener('resize', checkMobile); // Cleanup listener on unmount
  }, []);

  // Intersection Observer to trigger fade-in animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true); // Mark visible to trigger CSS transition
            observer.unobserve(entry.target); // Stop observing after first trigger
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the portfolio section
    }

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  // Handler to open the embedded URL in a new tab when an image is clicked
  const handleImageClick = (embedUrl) => {
    window.open(embedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    // Main container with fade-in class toggled based on visibility state
    <div
      ref={sectionRef}
      className={`portfolio-section ${visible ? 'fade-in-visible' : 'fade-in-hidden'}`}
    >
      {/* Portfolio header with localized title and instruction text */}
      <div className="portfolio-header">
        <h2>{t('homeTitle')}</h2>
        <small>{t('portfolioInstruction', 'Κάντε κλικ σε κάθε εικόνα για να δείτε αναλυτικά το κάθε έργο μας.')}</small>
      </div>

      {/* Carousel wrapper and container */}
      <div className="carousel-wrapper">
        <div className="carousel-container">
          {/* Swiper carousel component with coverflow effect */}
          <Carousel
            onSwiper={(swiper) => (carouselRef.current = swiper)} // Store swiper instance on init
            effect="coverflow" // Coverflow slide effect
            grabCursor={true} // Show grab cursor on hover
            centeredSlides={true} // Center active slide
            slidesPerView={isMobile ? 1.2 : 1.9} // Number of slides visible depending on viewport
            loop={true} // Enable continuous loop mode
            speed={350} // Slide transition speed in ms
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false, // Disable shadow effect on slides
            }}
            pagination={{ clickable: true, el: '.custom-pagination' }} // Pagination bullets config
            navigation={false} // Disable built-in navigation arrows
            modules={[EffectCoverflow, Pagination, Navigation]} // Load necessary modules
            className="carousel-container-swiper"
          >
            {/* Map through imageData array to create slides */}
            {imageData.map(({ src, embedUrl, title, description }, idx) => (
              <CarouselSlide key={idx} className="carousel-slide" style={{ position: 'relative' }}>
                {/* Slide image with click handler to open embed URL */}
                <img
                  src={src}
                  alt={`slide-${idx}`}
                  onClick={() => handleImageClick(embedUrl)}
                  style={{ cursor: 'pointer' }}
                />
                {/* Overlay text with title and description in current language */}
                <div className="overlay-text-top">
                  <h3>{title[lang]}</h3>
                  <p>{description[lang]}</p>
                </div>
              </CarouselSlide>
            ))}
          </Carousel>
        </div>

        {/* Custom pagination container for Swiper bullets */}
        <div className="custom-pagination"></div>

        {/* Custom navigation buttons */}
        <div className="carousel-navigation">
          <button
            className="carousel-button-prev"
            onClick={() => carouselRef.current?.slidePrev()} // Slide to previous slide on click
            aria-label="Previous slide"
          />
          <button
            className="carousel-button-next"
            onClick={() => carouselRef.current?.slideNext()} // Slide to next slide on click
            aria-label="Next slide"
          />
        </div>
      </div>

      {/* Additional component possibly showing more images or info */}
      <TourImages />
    </div>
  );
}
