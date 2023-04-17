import { useEffect, useState } from 'react';

type TRequestState = 'loading' | 'success' | 'error';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [requestState, setRequestState] = useState<TRequestState>('loading');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(
          data.map((country: any) => ({
            id: country?.name?.common,
            value: country?.name?.common,
            data: country,
          }))
        );
        setRequestState(() => 'success');
      })
      .catch(() => {
        setRequestState('error');
      });
  }, []);

  return { countries, requestState };
};
