import React from 'react';
import {Link} from 'react-router-dom';

class Character extends React.Component {

  //poner el reset filter

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
                                <img src={item.image} alt={item.name} className="item__img"/>
                                <p className="item__house">Casa: {item.house} </p>
                                <p className="item__birth">Año de nacimiento: {item.yearOfBirth} </p>
                                <p className="item__patronus">Patronus: {item.patronus ? item.patronus : "No tiene patronus"} </p>
                                <p className="item__alive">Estado: {item.alive ? 'vivo' : '☠️' } </p>
                            </div>
                        );
                    }
                })}
                <Link to='/'>Volver</Link>
            </div>

            
        );
    }
}
export default Character;