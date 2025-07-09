// Εισάγουμε τη συνάρτηση defineConfig από το πακέτο Vite για τη διαμόρφωση του έργου
import { defineConfig } from 'vite'

// Εισάγουμε το plugin για React ώστε το Vite να υποστηρίζει React αρχεία και JSX
import react from '@vitejs/plugin-react'

// Σύνδεσμος για την επίσημη τεκμηρίωση ρύθμισης Vite: https://vite.dev/config/
export default defineConfig({
  // Δηλώνουμε τα plugins που θα χρησιμοποιήσει το Vite κατά το build/serve
  plugins: [
    react() // Ενεργοποιούμε το React plugin για καλύτερη υποστήριξη React κώδικα
  ],
})
