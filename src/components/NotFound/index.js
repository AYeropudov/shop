import React, {Component} from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import './style.css';

class NotFound extends Component {
    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('NotFound', className)} {...props}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">404 Not Found</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default NotFound;
