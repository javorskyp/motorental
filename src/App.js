import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Motorcycles from './components/Motorcycles/Motorcycles';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';

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
      name: 'Yamaha R1',
      city: 'Lublin',
      rating: 8.8,
      description: 'Rok 2020 pojemność 998,2 199KM 208kg',
      image: ''
    }
  ];
  state = {
    motorcycles: [],
    loading: true,
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

  render() {
    return (
      <div className="App">
        <Header onSearch={term => this.searchHandler(term)}/>
        <Menu />
        {this.state.loading 
          ? <LoadingIcon />
          : <Motorcycles motorcycles={this.state.motorcycles} />
        }
      </div>
    );
  }
}

export default App;
