import React from 'react'
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<>
            <div className="header container-fluid">
                <div className="Header-containner row">
                    <div className="col-md-2">
                        <li onClick={() => this.props.history.push('/')}>Home</li>
                    </div>
                    <div className="col-md-2">
                        <li onClick={() => this.props.history.push('/')}>Home</li>
                    </div>
                    <div className="col-md-2">
                        <li onClick={() => this.props.history.push('/')}>Home</li>
                    </div>
                    <div className="col-md-2">
                        <li onClick={() => this.props.history.push('/')}>Home</li>
                    </div>
                    <div className="col-md-2">
                        <li onClick={() => this.props.history.push('/')}>Home</li>
                    </div>
                    <div className="Header-containner">
                    <a href="#" onClick={() => this.props.history.push("/login")}>Login</a>
                </div>
                </div>
                
            </div>
        </>)
    }
}