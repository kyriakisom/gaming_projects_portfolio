// 1. main.jsx

// Εισαγωγή βασικών βιβλιοθηκών React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Εισαγωγή της κύριας συνιστώσας App
import App from './App.jsx'

// Εισαγωγή του βασικού CSS αρχείου για στυλ
import './index.css'

// Εισαγωγή της ρύθμισης i18n για πολυγλωσσική υποστήριξη
import './i18n.js'

// Δημιουργία ρίζας React και απόδοση του App μέσα στο στοιχείο με id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // React Strict Mode για βοηθητικό έλεγχο ανάπτυξης
  <React.StrictMode>
    <App />  {/* Απόδοση της κύριας συνιστώσας της εφαρμογής */}
  </React.StrictMode>,
)
