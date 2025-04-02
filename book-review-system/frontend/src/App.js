// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import ReviewForm from './components/ReviewForm';
import RecommendationList from './components/RecommendationList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log('came here')
    fetch('http://localhost:3000') // updated the URL to match the backend route
      .then((response) => response.json())
      .then((data) => {
        console.log('dataa',data)
        setBooks(data)
      });
  }, []);
  

  return (
    <div className="App">
      <h1>Book Review and Recommendation System</h1>
      <BookList books={books} />
      <BookDetails />
      <ReviewForm />
      <RecommendationList />
    </div>
  );
}

export default App;