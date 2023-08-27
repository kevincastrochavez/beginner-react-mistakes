import React, { useEffect, useState } from 'react';

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { loading, data, error };
}

// Multiple urls fired too soon
// Second fetch could be the one taking more time, ended up with that result
// Data not synced
// 1.0ms + 150ms = 150ms
// 2.100ms + 300ms = 400ms
// 3.200ms + 100ms = 300ms
