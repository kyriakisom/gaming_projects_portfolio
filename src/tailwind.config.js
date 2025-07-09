// 5. tailwind.config.js

/** 
 * Ορισμός ρύθμισης για το Tailwind CSS 
 * @type {import('tailwindcss').Config} 
 */
export default {
  // Καθορισμός αρχείων που θα σαρώνονται για να βρεθούν οι κλάσεις Tailwind
  content: [
    "./index.html",            // Κύριο HTML αρχείο
    "./src/**/*.{js,ts,jsx,tsx}", // Όλα τα αρχεία JavaScript/TypeScript μέσα στο φάκελο src (και υποφακέλους)
  ],
  // Παραμετροποίηση του θέματος (theme) της Tailwind
  theme: {
    extend: {
      // Προσθήκη προσαρμοσμένων χρωμάτων στο default palette της Tailwind
      colors: {
        olive: '#808000',     // Χρώμα ελιάς
        ivory: '#FFFFF0',     // Χρώμα ελεφαντόδοντου (ανοιχτό κρεμ)
        charcoal: '#36454F',  // Σκούρο γκρι (ανθρακί)
      }
    },
  },
  // Plugins που προστίθενται στη Tailwind (εδώ κενό)
  plugins: [],
}
