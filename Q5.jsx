import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCountry, updatePopulation } from '../redux/actions/actions';

const Q5 = () => {
  const dispatch = useDispatch();
  const [continentCode, setContinentCode] = useState('');
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState('');

  const handleAddCountry = () => {
    const countryData = {
      nom: countryName,
      population: parseInt(population),
    };

    dispatch(addCountry(continentCode, countryData));

    setContinentCode('');
    setCountryName('');
    setPopulation('');
  };

  const handleUpdatePopulation = () => {
    dispatch(updatePopulation(continentCode, countryName, parseInt(population)));

    setContinentCode('');
    setCountryName('');
    setPopulation('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Code du continent"
        value={continentCode}
        onChange={e => setContinentCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom du pays"
        value={countryName}
        onChange={e => setCountryName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Population"
        value={population}
        onChange={e => setPopulation(e.target.value)}
      />
      <button onClick={handleAddCountry}>Ajouter un pays</button>
      <button onClick={handleUpdatePopulation}>Modifier la population</button>
    </div>
  );
};

export default Q5;