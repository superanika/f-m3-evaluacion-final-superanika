import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters : []
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
          userSearch : ''
        })
      })
  }
  componentDidMount () {
    this.getCharacters()
    console.log(this.state)
  }
  
  handleSearch (event) {
    const value = event.currentTarget.value;
    this.setState ({
      userSearch : value
    })
    
  }

  render () {
    const {characters, userSearch} = this.state;

    return (
      <div className="App">
        <h1 className="title">Harry Potter characters</h1>
        <input type="text" className="search" onChange={this.handleSearch}/>
        <ul className="list">
          {characters.filter(item => {
            return (
              item.name.toLowerCase().includes(userSearch.toLowerCase())
            );
          })
          .map(item => {
              return (
                <li key={item.id} className="list__item">
                  <img src={item.image} alt={item.name} className="item__img"/>
                  <p className="item__name">{item.name}</p>
                  <p className="item__house">{item.house}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
