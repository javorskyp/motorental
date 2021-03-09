import { Component } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Motorcycles from './components/Motorcycles/Motorcycles';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/LoadingIcon/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/LoadingIcon/ThemeButton/ThemeButton';
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
      id: 2,
      name: 'Yamaha R1',
      city: 'Lublin',
      rating: 8.8,
      description: 'Rok 2021 pojemność 998,2 199KM 208kg',
      image: ''
    },
    {
      id: 2,
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
    theme: 'primary'
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
    this.setState({theme:newTheme})
  }

  render() {
    return (
            <Layout
              header={<Header>
                        <Searchbar onSearch={term => this.searchHandler(term)} />
                        theme={this.state.theme}
                        <ThemeButton onChange={this.changeTheme}/>
                    </Header>}
              menu={<Menu theme={this.state.theme}/>}
              content={this.state.loading 
                ? <LoadingIcon theme={this.state.theme}/>
                : <Motorcycles motorcycles={this.state.motorcycles} theme={this.state.theme}/>
              }
              footer={
               <Footer theme={this.state.theme}/>
              }
            />
    );
  }
}

export default App;
