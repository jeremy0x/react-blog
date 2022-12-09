import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetching from localhost is pretty fast, so setTimeout is used to simulate a slow fetch
    const abortCont = new AbortController();
    
    // q: what is the AbortController for?
    // a: it is used to abort the fetch if the component is unmounted before the fetch is complete

    setTimeout(() => {

      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((error) => {
          if (error.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(error.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
