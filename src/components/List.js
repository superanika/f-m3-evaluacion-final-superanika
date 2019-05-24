import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends React.Component {
       
    render () {
        const {info} = this.props;

        return (
            <ul className="list">
              {info.characters.filter(item => {
                return (
                  item.name.toLowerCase().includes(info.userSearch.toLowerCase())
                );
              })
              .map(item => {
                  return (
                    <li key={item.id} className="list__item">
                      <img src={item.image} alt={item.name} className="item__img"/>
                      <h2 className="item__name">{item.name}</h2>
                      <p className="item__house">{item.house}</p>
                      <Link to= {`/Character/${item.id}`}>Más info</Link>
                    </li>
                  );
                })
              }
            </ul>
        );
    }
}

List.propTypes = {
    info: PropTypes.object
}

export default List;
