import  { useEffect, useReducer, useCallback} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Motorcycles from './components/Motorcycles/Motorcycles';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import BestMoto from './components/Motorcycles/BestMoto/BestMoto';
import LastMoto from './components/Motorcycles/LastMoto/LastMoto';
import useStateStorage from './components/hooks/useStateStorage';
import useWebsiteTitle from './components/hooks/useWebsiteTitle';

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

  const reducer = (state, action) => {
    switch (action.type) {
      case 'change-theme':
        const theme = state.theme === 'primary' ? 'danger' : 'primary'
        return {...state,theme};
        case 'set-motorcycles':
          return {...state, motorcycles: action.motorcycles}
        case 'set-loading':
          return {...state, loading: action.loading }
        case 'login':
            return {...state, isAuthenticated: true};
        case 'logout':
              return {...state, isAuthenticated: false};
      default:
        throw new Error ('no action' + action.tyope)
    }
  }

  const initialState = {
    motorcycles: [],
    loading: true,
    isAuthenticated: true,
    theme: 'primary'
  }

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [lastMoto, setLastMoto] = useStateStorage('last-moto', null);
  useWebsiteTitle('Strona główna');

  const searchHandler = (term) => {
    const newMotorcycles = [...backendMotorcycles]
      .filter(x => x.name
      .toLowerCase()
      .includes(term.toLowerCase()));
    dispatch({type: 'set-motorcycles', motorcycles: newMotorcycles})
  };

  const getBestMoto = () => {
      if(state.motorcycles.length < 2) {
        return null;
      } else {
        return state.motorcycles
        .sort((a,b)=> a.rating > b.rating ? -1: 1)[0];
      }
  }

  const openMotorcycle = (motorcycle) => setLastMoto(motorcycle);
  const removeLastMoto = () => setLastMoto(null);

  useEffect(() => {
      setTimeout(() => {
      dispatch({type: 'set-motorcycles', motorcycles: backendMotorcycles});
      dispatch({type: 'set-loading', loading: false});
    }, 1000);
  }, []);

  const header = (
    <Header>
      <Searchbar 
        onSearch={searchHandler}
        />
      <ThemeButton />
    </Header>
  );
  const content = (
    state.loading 
      ? <LoadingIcon />
      : (
        <>
        {lastMoto ? <LastMoto {...lastMoto} onRemove={removeLastMoto}/> : null}
        {getBestMoto() 
          ? <BestMoto getMotorcycle ={getBestMoto}/> : null}
        <Motorcycles onOpen={openMotorcycle} motorcycles={state.motorcycles}/>
        </>
      )
  );
  const menu = <Menu />;
  const footer = <Footer />;

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated: state.isAuthenticated,
      login: () => dispatch({type: 'login'}),
      logout: () => dispatch({type: 'logout'}),
    }}>
      <ThemeContext.Provider value={{
        color: state.theme,
        changeTheme: () => dispatch ({ type: 'change-theme'})
      }}>
        <Layout
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
