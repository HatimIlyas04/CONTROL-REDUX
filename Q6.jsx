import { useState } from 'react';
import { useSelector } from 'react-redux';

const Q6 = () => {
  const continents = useSelector(state => state.continents);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
  };

  const filteredCountries = continents.flatMap(continent => continent.countries)
    .filter(country => (selectedLanguage === '' || country.langue === selectedLanguage) &&
      (selectedContinent === '' || country.continent === selectedContinent));

  return (
    <div>
      <select value={selectedLanguage} onChange={e => handleLanguageChange(e.target.value)}>
        <option value="">Toutes les langues</option>
        {continents.flatMap(continent => continent.countries)
          .map(country => country.langue)
          .filter((language, index, self) => self.indexOf(language) === index)
          .map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
      </select>

      <select value={selectedContinent} onChange={e => handleContinentChange(e.target.value)}>
        <option value="">Tous les continents</option>
        {continents.map(continent => (
          <option key={continent.code} value={continent.code}>{continent.nom}</option>
        ))}
      </select>

      <ul>
        {filteredCountries.map(country => (
          <li key={country.nom}>{country.nom} - Population: {country.population}</li>
        ))}
      </ul>
    </div>
  );
};

export default Q6;