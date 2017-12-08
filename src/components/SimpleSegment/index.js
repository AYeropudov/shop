import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react'
import './style.css';
import logo from './logo.svg'
import TopMenu from "../TopMenu/index";
import classnames from 'classnames';

class SimpleSegment extends Component {

    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('SimpleSegment', className)} {...props}>
                <TopMenu/>
                <Segment vertical>
                    {this.props.content}
                </Segment>
            </div>
        );
    }
}

export default SimpleSegment;
