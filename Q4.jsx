import { useSelector } from 'react-redux';

const Q4 = () => {
  const continents = useSelector(state => state.continents);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const filteredCountries = continents.flatMap(continent => continent.countries)
    .filter(country => country.langue === selectedLanguage);

  return (
    <div>
      {continents.flatMap(continent => continent.countries)
        .map(country => country.langue)
        .filter((language, index, self) => self.indexOf(language) === index)
        .map(language => (
          <a key={language} href="#" onClick={() => handleLanguageClick(language)}>
            {language}
          </a>
        ))}
      
     Suite du code pour le composant "Q4" :

      {selectedLanguage && (
        <div>
          <h3>Pays parlant {selectedLanguage}</h3>
          <ul>
            {filteredCountries.map(country => (
              <li key={country.nom}>{country.nom} - Population: {country.population}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Q4;
