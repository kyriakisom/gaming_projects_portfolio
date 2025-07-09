import { useState } from 'react'; // React hook for managing state
import { useTranslation } from 'react-i18next'; // Hook for internationalization
import './Services.css'; // Importing component-specific CSS
import Testimonials from '../components/Testimonials'; // Testimonials component import

// Object defining services grouped by categories with multilingual text and descriptions
const categories = {
  Production: [
    {
      key: '3dModeling',
      text: { en: '3D Modeling', gr: '3D Μοντελοποίηση' },
      description: {
        en: 'High-quality 3D models for your digital projects.',
        gr: 'Υψηλής ποιότητας 3D μοντέλα για τα ψηφιακά σας έργα.',
      },
    },
    {
      key: '2dArt',
      text: { en: '2D Art', gr: '2D Τέχνη' },
      description: {
        en: 'Illustrations and concept art tailored to your vision.',
        gr: 'Εικονογραφήσεις και concept art προσαρμοσμένα στο όραμά σας.',
      },
    },
    {
      key: 'InteractiveVirtualTours',
      text: { en: 'Interactive Virtual Tours', gr: 'Διαδραστικές Εικονικές Περιηγήσεις' },
      description: {
        en: 'Immersive tours that enhance user engagement.',
        gr: 'Εντυπωσιακές περιηγήσεις που αυξάνουν τη συμμετοχή των χρηστών.',
      },
    },
  ],
  Publishing: [
    {
      key: 'GamePublishing',
      text: { en: 'Game Publishing', gr: 'Έκδοση Παιχνιδιών' },
      description: {
        en: 'End-to-end publishing support for your game.',
        gr: 'Υποστήριξη έκδοσης για το παιχνίδι σας από την αρχή έως το τέλος.',
      },
    },
    {
      key: 'Marketing',
      text: { en: 'Marketing', gr: 'Μάρκετινγκ' },
      description: {
        en: 'Effective strategies to reach your audience.',
        gr: 'Αποτελεσματικές στρατηγικές για να προσεγγίσετε το κοινό σας.',
      },
    },
  ],
};

// ✅ Object for the section titles in different languages
const sectionTitles = {
  Production: {
    en: 'Production',
    gr: 'Παραγωγή',
  },
  Publishing: {
    en: 'Publishing',
    gr: 'Έκδοση',
  },
};

// Functional component for rendering a category of services
function ServiceCategory({ titleKey, services }) {
  const { i18n } = useTranslation(); // Access translation context
  const lang = i18n.language || 'en'; // Current language or fallback to English
  const [activeIndex, setActiveIndex] = useState(0); // State to track which service is active

  // Handler for navigating to the previous service
  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // Handler for navigating to the next service
  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  return (
    <section className="services-card">
      {/* Sidebar with category title, navigation buttons, and list of services */}
      <div className="sidebar">
        {/* Category title localized */}
        <h3 className="categories-title">{sectionTitles[titleKey][lang]}</h3>

        {/* Button to navigate to previous service */}
        <button onClick={prev} className="nav-button">▲</button>

        {/* List of services */}
        <div className="service-list">
          {services.map((service, index) => (
            <div
              key={service.key} // Unique key for React list
              onClick={() => setActiveIndex(index)} // Set this service as active on click
              className={`service-item ${index === activeIndex ? 'active' : ''}`} // Highlight active item
            >
              {service.text[lang]} {/* Localized service name */}
            </div>
          ))}
        </div>

        {/* Button to navigate to next service */}
        <button onClick={next} className="nav-button">▼</button>
      </div>

      {/* Details panel showing selected service info */}
      <div className="details">
        {/* Placeholder for image or title of selected service */}
        <div className="image-placeholder">
          {services[activeIndex].text[lang]} {/* Localized service title */}
        </div>

        {/* Description of selected service */}
        <p className="description">
          {services[activeIndex].description[lang]} {/* Localized description */}
        </p>
      </div>
    </section>
  );
}

// Main Services component rendering multiple service categories and testimonials
export default function Services() {
  return (
    <>
      {/* Render Production category */}
      <ServiceCategory
        titleKey="Production"
        services={categories.Production}
      />

      {/* Render Publishing category */}
      <ServiceCategory
        titleKey="Publishing"
        services={categories.Publishing}
      />

      {/* Testimonials section */}
      <section className="testimonials-section">
        <Testimonials />
      </section>
    </>
  );
}
