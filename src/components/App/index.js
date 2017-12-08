import React, {Component} from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import './style.css';
import TopMenu from "../TopMenu/index";
import AdvertiseSegment from "../AdvertiseSegment/index";

class App extends Component {
    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('App', className)} {...props}>
                <TopMenu/>
                <AdvertiseSegment/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
