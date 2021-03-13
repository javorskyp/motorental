import React, { Component } from 'react';
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

class App extends Component { 
  motorcycles = [
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
  state = {
    motorcycles: [],
    loading: true,
    theme: 'primary',
    isAuthenticated: false
  };

  searchHandler(term) {
    const motorcycles = [...this.motorcycles]
      .filter(x => x.name
          .toLowerCase()
          .includes(term.toLowerCase()));
    this.setState({ motorcycles });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ 
          motorcycles: this.motorcycles, 
          loading: false 
      });
    }, 1000);
  }

  changeTheme = () => {
    const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
    this.setState({ theme: newTheme });
  }

  login = (e) => {
    e.preventDefault();
    this.setState({ isAuthenticated: true })
  }

  logout = (e) => {
    e.preventDefault();
    this.setState({ isAuthenticated: false })
  }

  render() {
    const header = (
      <Header>
        <Searchbar 
          onSearch={term => this.searchHandler(term)}
          />
        <ThemeButton />
      </Header>
    );
    const content = (
      this.state.loading 
        ? <LoadingIcon />
        : <Motorcycles motorcycles={this.state.motorcycles} />
    );
    const menu = <Menu />;
    const footer = <Footer />;

    return (
      <AuthContext.Provider value={{ 
        isAuthenticated: this.state.isAuthenticated,
        login: this.login,
        logout: this.logout
      }}>
        <ThemeContext.Provider value={{
          color: this.state.theme,
          changeTheme: this.changeTheme
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
  }
}

export default App;
