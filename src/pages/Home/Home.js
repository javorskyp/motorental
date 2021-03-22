import { useEffect, useState } from 'react';
import BestMoto from '../../components/Motorcycles/BestMoto/BestMoto'
import LastMoto from '../../components/Motorcycles/LastMoto/LastMoto';
import useStateStorage from '../../hooks/useStateStorage';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import Motorcycles from '../../components/Motorcycles/Motorcycles';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

const backendMotorcycles = [
    {
      id: 1,
      name: 'Gsxr 1000',
      city: 'Warszawa',
      rating: 8.3,
      description: 'Rok 2021 pojemność 999,7 201KM 199kg',
      image: '' 
    },

    {
      id: 2,
      name: 'Zx10r',
      city: 'Wrocław',
      rating: 9.2,
      description: 'Rok 2021 pojemność 999,8 201KM 211kg',
      image: ''
    },

    {
      id: 3,
      name: 'Yamaha R1',
      city: 'Lublin',
      rating: 8.8,
      description: 'Rok 2021 pojemność 998,2 199KM 208kg',
      image: ''
    },
    {
      id: 4,
      name: 'CBR 1000RR',
      city: 'Rzeszów',
      rating: 8.1,
      description: 'Rok 2021 pojemność 998,4 205KM 203kg',
      image: ''
    }
  ];

export default function Home(props) {
    useWebsiteTitle('Strona główna');
    const [lastMoto, setLastMoto] = useStateStorage('last-moto', null);

    const [loading, setLoading] = useState(true);
    const [motorcycles, setMotorcycles] = useState([])

    const getBestMoto = () => {
        if(motorcycles.length < 2) {
          return null;
        } else {
          return motorcycles.sort((a,b)=> a.rating > b.rating ? -1: 1)[0];
        }
    }
    
    const openMotorcycle = (motorcycle) => setLastMoto(motorcycle);
    const removeLastMoto = () => setLastMoto(null);

    useEffect(() => {
        setTimeout(() => {
            setMotorcycles(backendMotorcycles)
            setLoading(false);
      }, 1000);
    }, []);
    

    return loading ? <LoadingIcon/> : (
        <>
        {lastMoto ? <LastMoto {...lastMoto} onRemove={removeLastMoto}/> : null}
          {getBestMoto() ? <BestMoto getMotorcycle ={getBestMoto}/> : null}
          <Motorcycles onOpen={openMotorcycle} motorcycles={motorcycles}/>
        </>
    )
}