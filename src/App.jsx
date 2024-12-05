import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import './style.css'; // Assuming you renamed your CSS file to `style.css`

const App = () => {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState('');
  const [darkMode, setDarkMode] = useState(true);  // Default to dark mode
  const [error, setError] = useState(null); // State to store error message

  const NASA_API_KEY = '7plMjBtGNmbJt2Nqhbfug35HdB2DHxycW4DgBbWT'; // Your NASA API key

  // Fetch data from NASA API using fetch instead of axios
  const fetchApod = async (selectedDate = '') => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}${
      selectedDate ? `&date=${selectedDate}` : ''
    }`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data from NASA');
      }
      const data = await response.json();
      setApod(data);
      setError(null); // Reset error if fetch is successful
    } catch (error) {
      setError(error.message); // Set error message if there's an issue
      setApod(null); // Reset APOD data if fetch fails
    }
  };

  // Fetch today's image on initial render and set interval for every 10 minutes
  useEffect(() => {
    fetchApod(); // Fetch today's image
    const intervalId = setInterval(() => {
      fetchApod(); // Refresh every 10 minutes
    }, 10 * 60 * 1000); // 10 minutes in milliseconds
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Handle date input change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Handle search by date
  const handleSearch = () => {
    if (date) {
      fetchApod(date);
    } else {
      setError('Please select a valid date'); // Show error if no date is selected
    }
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="content">
        <div className="search-bar">
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="date-input"
          />
          <button
            onClick={handleSearch}
            className="search-button"
          >
            Search
          </button>
        </div>

        {/* Error message display */}
        {error && <div className="error-message">{error}</div>}

        {apod && (
          <ImageCard
            title={apod.title}
            date={apod.date}
            explanation={apod.explanation}
            url={apod.url}
          />
        )}
      </div>
    </div>
  );
};

export default App;
