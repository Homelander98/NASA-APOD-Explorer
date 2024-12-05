// src/components/ImageCard.jsx
import React from 'react';

const ImageCard = ({ title, date, explanation, url }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.date}>Date: {date}</p>
      <p style={styles.explanation}>{explanation}</p>
      <img src={url} alt={title} style={styles.image} />
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem',
    color: '#333',
  },
  date: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '10px',
  },
  explanation: {
    fontSize: '1rem',
    color: '#444',
    marginBottom: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default ImageCard;
