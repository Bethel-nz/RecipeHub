import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let source;

    const fetchData = async (url) => {
      setIsLoading(true);
      setFetchError(null);
      if (source) {
        source.cancel('New request triggered');
      }

      source = axios.CancelToken.source();

      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          if (isMounted) {
            setFetchError(error.message);
            setData([]);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    return () => {
      isMounted = false;
      if (source) {
        source.cancel('Component unmounted');
      }
    };
  }, [dataUrl]);

  return [data, fetchError, isLoading];
};

export default useAxios;
