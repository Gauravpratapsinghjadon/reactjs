import React from 'react';
import Header from '../../_Components/Comman/Header/Header'
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<>
            <div>
                <Header history={this.props.history}></Header>
            </div>
            <div>My Screen</div>
        </>)
    }
}