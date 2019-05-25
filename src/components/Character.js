import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Character.scss';

class Character extends React.Component {

    render () {
        const {info}= this.props;
        const {id}= this.props.match.params;
        return (
            <div className="wrapper">
                {info.characters.map(item => {
                    if(id === item.id){
                        return (
                            <div key={item.id} className="details">
                                <div className="detail-img__container" style={{backgroundImage: `url(${item.image})`}}>
                                    <img src={item.image} alt={item.name} className="item__img"/>
                                </div>
                                <div className={`detail__info ${item.house}`}>
                                    <h2 className="item__name">{item.name}</h2>
                                    <div className="house__shield">
                                        {item.houseImg ? 
                                             <img className="house__img" src={item.houseImg} alt={item.house} />
                                             : null }
                                    </div>
                                    <p className="item__house">{item.house ? `Casa: ${item.house}`: 'No pertenece a ninguna casa'}</p>
                                    <p className="item__birth">Año de nacimiento: {item.yearOfBirth} </p>
                                    <p className="item__patronus">Patronus: {item.patronus ? item.patronus : "No tiene patronus"} </p>
                                    <div className="item__status">
                                        <p className="item__alive">Estado:  </p>
                                        {item.alive ? <span className="alive" role="img" aria-label="is alive">❤️</span> : <span className="dead" role="img" aria-label="is dead">  ☠️</span> }
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return true;
                })}
                <Link to='/' className="back__link">Volver</Link>

            </div>
        );
    }
}

Character.propTypes = {
    info: PropTypes.object,
    id: PropTypes.number
}

export default Character;