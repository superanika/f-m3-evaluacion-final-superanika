import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component {
    render () {
        const {info}= this.props;
        return (
            <div className="filter">
                <label htmlFor="search" className="label"><span role="img" aria-label="magnifying glass icon for search field">🔎</span></label>
                <input id="search "type="text" className="search" value={info.userSearch} onChange={this.props.handleSearch} placeholder="Búsqueda por nombre"/>
            </div>
        );
    }
}

Filter.propTypes = {
    info: PropTypes.object
}

export default Filter; 