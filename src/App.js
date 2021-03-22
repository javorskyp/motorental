import  { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import ReducerContext from './context/reducerContext';
import { reducer, initialState } from './reducer';
import Home from './pages/Home/Home';
import Moto from './pages/Home/Moto';


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

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = (term) => {
    const newMotorcycles = [...backendMotorcycles]
      .filter(x => x.name
      .toLowerCase()
      .includes(term.toLowerCase()));
    dispatch({type: 'set-motorcycles', motorcycles: newMotorcycles})
      };

  const header = (
    <Header>
      <Searchbar onSearch={searchHandler}/>
      <ThemeButton />
    </Header>
  );

  const content = (
        <div>
        <Switch>
          <Route path="/motocycles/:id" component={Moto}/>
          <Route path="/" component={Home}/>
        </Switch>
    
        </div>
  );

  const menu = <Menu />;
  const footer = <Footer />;

  return (
    <Router>
    <AuthContext.Provider value={{ 
      isAuthenticated: state.isAuthenticated,
      login: () => dispatch({type: 'login'}),
      logout: () => dispatch({type: 'logout'}),
    }}>
      <ThemeContext.Provider value={{
        color: state.theme,
        changeTheme: () => dispatch ({ type: 'change-theme'})
      }}>
       <ReducerContext.Provider value ={{
         state: state,
         dispatch: dispatch
       }}>
        <Layout
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
       </ReducerContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
    </Router>
  );
};

export default App;
