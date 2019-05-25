import React from 'react';
import './App.scss';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import Character from './components/Character';
import {fetchCharacters} from './services/Fetch';
import gryffindor from './images/gryffindor.png';
import slytherin from './images/slytherin.png';
import hufflepuff from './images/hufflepuff.png';
import ravenclaw from './images/ravenclaw.png';
import logo from './images/logo.png';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      characters : [],
      userSearch : ''
    }
    this.getCharacters = this.getCharacters.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getCharacters() {
    fetchCharacters()
      .then(data => {
        
        const newData = data.map((item, index) => {
            if(item.house === 'Slytherin') {
              return {...item, id: `${index}`, houseImg: slytherin};
            }else if (item.house === 'Gryffindor') {
              return {...item, id: `${index}`, houseImg: gryffindor};
            }else if (item.house === 'Ravenclaw') {
              return {...item, id: `${index}`, houseImg: ravenclaw};
            }else if (item.house === 'Hufflepuff') {
              return {...item, id: `${index}`, houseImg: hufflepuff};
            }else {
              return {...item, id: `${index}`}
            }
        });

        this.setState({
          characters : newData,
        })
        console.log(newData);
      })
  }

  componentDidMount () {
    this.getCharacters()
  }
  
  handleSearch (event) {
    const value = event.currentTarget.value;
    this.setState ({
      userSearch : value
    })
  }

  render () {

    return (
      <div className="App">
        <h1 className="title">
          <img src={logo} alt="harry potter" className="logo"/>
        </h1>
        <Switch>
        <Route exact path="/" render= {() => 
            <Home info={this.state} handleSearch={this.handleSearch} />
        } />
            <Route path="/Character/:id" render={routerProps => (
                <Character match={routerProps.match} info={this.state}/> 
              )}
            />
            
            
        </Switch>
      </div>
    );
  }
}

export default App;
