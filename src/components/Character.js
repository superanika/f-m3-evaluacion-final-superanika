import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

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
                                <h2 className="item__name">{item.name}</h2>
                                <img src={item.image} alt={item.name} className="detail__img"/>
                                {/* <div className="house__shield">
                                    <img className="house__img" src={item.houseImg} alt={item.house} />
                                </div> */}
                                <p className="item__house">{item.house ? `Casa: ${item.house}`: 'No pertenece a ninguna casa'}</p>
                                <p className="item__birth">Año de nacimiento: {item.yearOfBirth} </p>
                                <p className="item__patronus">Patronus: {item.patronus ? item.patronus : "No tiene patronus"} </p>
                                <p className="item__alive">Estado: {item.alive ? 'vivo' : '☠️' } </p>
                            </div>
                        );
                    }
                    return true;
                })}
                <Link to='/'>Volver</Link>
            </div>
        );
    }
}

Character.propTypes = {
    info: PropTypes.object,
    id: PropTypes.number
}

export default Character;