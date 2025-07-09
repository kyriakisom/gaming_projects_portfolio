// components/InstagramFeedAPI.js

// Εισάγουμε React και τα hooks useEffect και useState
import React, { useEffect, useState } from 'react';

// Εισάγουμε το αρχείο CSS με τα στυλ για το Instagram feed
import './InstagramFeed.css';

// Σταθερά για το access token
// Προσοχή: πρέπει να είναι επαγγελματικός (business) λογαριασμός για να δουλέψει το Instagram Graph API
const accessToken = 'ΠΡΕΠΕΙ ΝΑ ΝΑΙ ΕΠΑΓΓΕΛΜΑΤΙΚΟΣ Ο ΛΟΓΑΡΙΑΣΜΟΣ!'; // Long-lived token

// Πόσα posts να φέρει από το API
const limit = 4;

// Ορίζουμε τη React component InstagramFeedAPI
const InstagramFeedAPI = () => {
  // State που κρατάει τα posts που θα φέρουμε από το Instagram API
  const [posts, setPosts] = useState([]);

  // Χρήση του useEffect για το fetch των δεδομένων μόλις γίνει mount το component
  useEffect(() => {
    // Συνάρτηση που κάνει fetch τα posts από το Instagram Graph API
    const fetchInstagramPosts = async () => {
      try {
        // Κάνουμε αίτημα στο Instagram Graph API
        const res = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${accessToken}&limit=${limit}`
        );
        // Μετατρέπουμε την απάντηση σε JSON
        const data = await res.json();
        // Αποθηκεύουμε τα δεδομένα στο state (ή κενό πίνακα αν αποτύχει)
        setPosts(data.data || []);
      } catch (err) {
        // Αν υπάρξει σφάλμα, το εμφανίζουμε στην κονσόλα
        console.error('Instagram API error:', err);
      }
    };

    // Καλούμε τη συνάρτηση fetch για να ξεκινήσει το αίτημα
    fetchInstagramPosts();
  }, []); // Άδειο array εξαρτήσεων = εκτελείται μόνο στο πρώτο render

  // Το JSX που επιστρέφει το component
  return (
    <div className="instagram-feed-api">
      {/* Τίτλος του feed */}
      <h2 className="feed-title">#Instagram Moments</h2>
      
      {/* Map στα posts για να εμφανίσουμε το καθένα */}
      {posts.map((post, index) => (
        <div
          key={post.id} // Μοναδικό key για κάθε post
          className={`insta-post ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`} // Εναλλαγή διάταξης για κάθε δεύτερο post
        >
          {/* Link προς το Instagram post */}
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            {/* Εικόνα του post */}
            <img src={post.media_url} alt="Instagram Post" loading="lazy" />
          </a>
          {/* Λεζάντα του post ή fallback μήνυμα */}
          <p>{post.caption?.slice(0, 100) || 'No caption available.'}</p>
        </div>
      ))}
    </div>
  );
};

// Εξάγουμε το component για χρήση σε άλλα μέρη της εφαρμογής
export default InstagramFeedAPI;
