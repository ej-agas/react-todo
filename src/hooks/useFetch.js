import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        setIsLoading(false);
        setData(results);
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage(
          'There was an error fetching data from external service.'
        );
      });
  }, [url]);

  return { data, isLoading, errorMessage };
}

export default useFetch;
