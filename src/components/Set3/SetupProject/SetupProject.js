import React, { Component } from 'react';

import Header from '../Header/Header';
import SetupProjectHeader from './SetupProjectHeader'

class SetupProject extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div>
                <Header />
                <SetupProjectHeader />
            </div>
        );
    }
}

export default SetupProject;