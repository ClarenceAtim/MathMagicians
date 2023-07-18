import { useState, useEffect } from 'react';
import './Quote.css';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=', {
          headers: {
            'X-Api-Key': 'NfoT8VUfn3ggVdNgKGca8w==7Xd1S5sCE9QXVTwO',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote-container">
      <div className="quote">{quote}</div>
      <div className="author">
        -
        {author}
      </div>
    </div>
  );
}

export default Quote;
