import React from 'react';

class Filter extends React.Component {
    render () {
        const {info}= this.props;
        return (
            <div className="filter">
                <label htmlFor="search" className="label hidden">Buscar</label>
                <input id="search "type="text" className="search" value={info.userSearch} onChange={this.props.handleSearch}/>
            </div>
        );
    }
}
export default Filter; 