import React from 'react';
import Filter from './Filter';
import List from './List';

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
export default Home;