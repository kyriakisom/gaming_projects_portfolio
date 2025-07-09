// 6. vite.config.js

// Εισαγωγή της συνάρτησης defineConfig από το Vite για να ορίσουμε τη ρύθμιση
import { defineConfig } from 'vite'

// Εισαγωγή του επίσημου React plugin για το Vite, που επιτρέπει τη σωστή υποστήριξη JSX και fast refresh
import react from '@vitejs/plugin-react'

// Εξαγωγή της βασικής ρύθμισης για το Vite
export default defineConfig({
  // Καταχώρηση των plugins που θα χρησιμοποιηθούν από το Vite
  plugins: [
    react() // Προσθέτει υποστήριξη React (JSX, Fast Refresh κτλ)
  ],
})
