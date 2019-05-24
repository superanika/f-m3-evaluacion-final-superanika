import React from 'react';
import Filter from './Filter';
import List from './List';
import PropTypes from 'prop-types';


class Home extends React.Component {
    render() {
      const {info, handleSearch} = this.props;
        return (
            <div className="home">
                <Filter handleSearch={handleSearch} info={info}/>
                <List info={info}/>
            </div>
        );
    }
}
Home.propTypes = {
    info: PropTypes.object,
    handleSearch: PropTypes.func
}
export default Home;