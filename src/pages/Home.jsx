import { Swiper, SwiperSlide } from 'swiper/react';           // Εισαγωγή Swiper components για slides
import { Autoplay, Pagination } from 'swiper/modules';       // Εισαγωγή modules για αυτόματο παίξιμο και pagination
import 'swiper/css';                                          // Βασικό CSS του Swiper
import 'swiper/css/pagination';                               // CSS για pagination bullets
import './Home.css';                                          // Custom CSS για τη σελίδα Home
import { useTranslation } from 'react-i18next';               // Hook για i18n μετάφραση
import LanguageSwitcher from '../components/LanguageSwitcher'; // Component αλλαγής γλώσσας (απενεργοποιημένο προς το παρόν)
import { Link } from 'react-router-dom';                      // Χρήση Link για navigation αντί για <a>

/**
 * Κύριο component της αρχικής σελίδας
 */
export default function Home() {
  const { t } = useTranslation();  // Hook για μετάφραση, t = translate function

  return (
    // Κύριο container πλήρους οθόνης, με relative positioning και απόκρυψη overflow
    <div className="relative h-screen w-screen overflow-hidden">

      {/* 🟢 Swiper με εικόνες */}
      {/* Carousel εικόνων με αυτόματο πέρασμα και pagination */}
      <Swiper
        modules={[Autoplay, Pagination]}          // Ενεργοποίηση των modules Autoplay και Pagination
        autoplay={{ delay: 3000, disableOnInteraction: false }}  // Αυτόματο πέρασμα κάθε 3 δευτερόλεπτα, συνεχίζει μετά αλληλεπίδρασης
        pagination={{ clickable: true }}          // Pagination bullets που είναι clickable
        loop={true}                               // Αέναο loop στα slides
        className="h-full w-full"                  // Πλήρες ύψος και πλάτος για το swiper
      >
        {/* Κάθε slide με background image */}
        <SwiperSlide>
          <div className="slide-bg" style={{ backgroundImage: "url('/slide1.jpg')" }} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-bg" style={{ backgroundImage: "url('/slide2.jpg')" }} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-bg" style={{ backgroundImage: "url('/slide3.jpg')" }} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-bg" style={{ backgroundImage: "url('/slide4.jpg')" }} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-bg" style={{ backgroundImage: "url('/slide5.jpg')" }} />
        </SwiperSlide>
      </Swiper>

      {/* 🟢 Κείμενο καλωσορίσματος */}
      {/* Το κείμενο που εμφανίζεται πάνω από τα slides */}
      <div className="welcome-text">
        {t('homeTitle', 'Καλώς Ορίσατε!')}  {/* Χρήση key για μετάφραση με fallback στα Ελληνικά */}
      </div>

      {/* 🟢 Κουμπιά πλοήγησης */}
      {/* Κουμπιά που οδηγούν σε άλλες σελίδες της εφαρμογής */}
      <div className="btn-overlay">
        {/* Χρήση React Router Link για εσωτερική πλοήγηση χωρίς ανανέωση σελίδας */}
        <Link to="/portfolio-tours" className="btn-slide">
          {t('tours', 'Tours')}  {/* Μετάφραση του κειμένου κουμπιού */}
        </Link>
        <Link to="/contact" className="btn-slide">
          {t('contact', 'Contact')}  {/* Μετάφραση του κειμένου κουμπιού */}
        </Link>
      </div>

      {/* 🟢 Εναλλαγή γλώσσας */}
      {/* Σχολιασμένο για τώρα - μπορεί να ενεργοποιηθεί για αλλαγή γλώσσας */}
      {/* <LanguageSwitcher /> */}
    </div>
  );
}
