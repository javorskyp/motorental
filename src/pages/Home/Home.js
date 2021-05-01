import { useEffect, useState } from 'react';
import BestMoto from '../../components/Motorcycles/BestMoto/BestMoto'
import LastMoto from '../../components/Motorcycles/LastMoto/LastMoto';
import useStateStorage from '../../hooks/useStateStorage';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import Motorcycles from '../../components/Motorcycles/Motorcycles';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import axios from '../../axios';
import { objectToArrayWithId } from '../../helpers/objectsMoto';

export default function Home(props) {
    useWebsiteTitle('Strona główna');
    const [lastMoto, setLastMoto] = useStateStorage('last-moto', null);

    const [loading, setLoading] = useState(true);
    const [motorcycles, setMotorcycles] = useState([]);

    const getBestMoto = () => {
        if(motorcycles.length < 2) {
          return null;
        } else {
          return motorcycles.sort((a,b)=> a.rating > b.rating ? -1: 1)[0];
        }
    }
    
    const openMotorcycle = (motorcycle) => setLastMoto(motorcycle);
    const removeLastMoto = () => setLastMoto(null);
    const fetchMotorcycles = async () => {
      try {
        const res = await axios.get('/motorcycles.json');
        const newMotorcycles = objectToArrayWithId(res.data).filter(motorcycle => motorcycle.status == 1);
        setMotorcycles(newMotorcycles);
      } catch (ex) {
        console.log(ex.response);
      } setLoading(false);
    }

    useEffect(() => {
       fetchMotorcycles();
    }, []);
    
    return loading ? <LoadingIcon/> : (
        <>
        {lastMoto ? <LastMoto {...lastMoto} onRemove={removeLastMoto}/> : null}
          {getBestMoto() ? <BestMoto getMotorcycle ={getBestMoto}/> : null}
          <Motorcycles onOpen={openMotorcycle} motorcycles={motorcycles}/>
        </>
    );
}