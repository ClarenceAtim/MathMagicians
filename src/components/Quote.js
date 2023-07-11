import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
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
    <div>
      <div>{quote}</div>
    </div>
  );
}

export default Quote;
