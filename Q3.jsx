import { useSelector } from 'react-redux';

const Q3 = () => {
  const continents = useSelector(state => state.continents);

  return (
    <div>
      {continents.map(continent => (
        <div key={continent.code}>
          <img src={continent.carte} alt={continent.nom} />
          <h3>{continent.nom}</h3>
          <p>Superficie: {continent.surface}</p>
          <p>Population: {continent.population}</p>
        </div>
      ))}
    </div>
  );
};

export default Q3;