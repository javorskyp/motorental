import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

function Moto(props) {
    const { id } = useParams();
    const [moto, setMoto] = useState(null);
    const [loading, setLoading] = useState(true)

    const fetchMoto = () => {
        setMoto({
                id: 1,
                name: 'Gsxr 1000',
                city: 'Warszawa',
                rating: 8.3,
                description: 'Rok 2021 pojemność 999,7 201KM 199kg',
                image: '' 
        });
        setLoading(false)
    }

    useEffect(() => {
            setTimeout(() => {
                fetchMoto();
            }, 500);
    }, []);

    return loading ? <LoadingIcon /> : (<h1>Moto: {moto.title} </h1> );
}

export default Moto;