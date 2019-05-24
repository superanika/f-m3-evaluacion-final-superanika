import React from 'react';
import './App.css';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import Character from './components/Character';


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
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        
        const newData = data.map((item, index) => {
          return {...item, id: `${index}`};
        });

        this.setState({
          characters : newData,
        })
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
        <h1 className="title">Harry Potter characters</h1>
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
