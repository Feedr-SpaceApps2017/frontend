import React from 'react';
import List from './List';
import data from './mocked-data';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shortageList: data.shortages,
            surplusList: data.surpluses
        }
    }
    render() {
        const { surplusList, shortageList } = this.state;
        return (
            <div className="grid">
                <List list={shortageList.list} tag={shortageList.tag} />
                <List list={surplusList.list} tag={surplusList.tag} />
            </div>
        );
    }
}

export default Main;