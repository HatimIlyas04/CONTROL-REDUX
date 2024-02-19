import { useDispatch, useSelector } from "react-redux";
import { fetchContinents } from "../redux/actions/actions";

const ListContinents = () => {
    const dispatch = useDispatch()
    const continents = useSelector(state => state.continents)

    useEffect(() => {
        dispatch(fetchContinents())
    }, []);

    return (
        <div>
            <h2>List des continents :</h2>
            <ul>
                {continents.map(continent => (
                    <li key={continent.id}>
                        <p>Code : {continent.code}</p>
                        <p>Nom : {continent.nom}</p>
                        <p>Suraface : {continent.surface}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListContinents;