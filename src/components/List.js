import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './List.scss';

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
                    <li key={item.id} className="list__item" >
                      <Link to= {`/Character/${item.id}`} className="item__info">
                        <div className="image__container" style={{backgroundImage: `url(${item.image})`}}>
                            <img src={item.image} alt={item.name} className="item__img"/>
                        </div>
                      <div className={`character__info ${item.house}`}>
                        <h2 className="item__name">{item.name}</h2>
                        <div className="house__shield">
                        {item.houseImg ? 
                              <img className="house__img" src={item.houseImg} alt={item.house} />
                              : null }
                        </div>
                        <p className="item__house">{item.house ? `${item.house}`: 'No pertenece a ninguna casa'}</p>
                      </div>
                    </Link>
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
