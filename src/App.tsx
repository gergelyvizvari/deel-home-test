import { useEffect, useState } from 'react';
import './App.css';
import AutoComplete, { TIdValueData } from './components/autoComplete';
import { useFetchCountries } from './hooks/countries';

function App() {
  const [countryFrom, setCountryFrom] = useState<TIdValueData | undefined>();
  const [countryTo, setCountryTo] = useState<TIdValueData | undefined>();
  const { countries, requestState } = useFetchCountries();

  useEffect(() => {
    if (countries.length > 0 && countryFrom === undefined) {
      setCountryFrom(countries[0]);
    }
  }, [setCountryFrom, countries, countryFrom]);

  if (requestState === 'loading') {
    return <div>Loading countries...</div>;
  }

  if (requestState === 'error') {
    return <div>Something bad happened</div>;
  }

  return (
    <div className="app">
      <h2>Country Picker</h2>

      <div>
        <label>Country From:</label>
        <AutoComplete
          items={countries}
          onChange={(country) => setCountryFrom(country)}
          selectedItemId={countryFrom?.id}
          placeholder="please type in the origin country"
        />
      </div>

      <div>
        <label>Country To:</label>
        <AutoComplete
          items={countries}
          onChange={(country) => setCountryTo(country)}
          selectedItemId={countryTo?.id}
          placeholder="please type in the destination country"
        />
      </div>

      <div className="flags">
        <img src={countryFrom?.data.flags.png} />
        <img src={countryTo?.data.flags.png} />
      </div>
    </div>
  );
}

export default App;
