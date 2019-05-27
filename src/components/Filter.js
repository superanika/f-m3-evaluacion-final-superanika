import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component {
    render () {
        const {info, handleSearch, handleSelect}= this.props;
        return (
            <div className="filter">
                <label htmlFor="search" className="label"><span role="img" aria-label="magnifying glass icon for search field">🔎</span></label>
                <input id="search "type="text" className="search" value={info.userSearch} onChange={handleSearch} placeholder="Búsqueda por nombre"/>
                <select name="houses" id="houses" onChange={handleSelect} value={info.userSelect}>
                    <option value="casa">Selecciona la casa</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="sinCasa">Pobres que no pertenece a ninguna casa</option>
               </select>
            </div>
        );
    }
}

Filter.propTypes = {
    info: PropTypes.object
}

export default Filter; 