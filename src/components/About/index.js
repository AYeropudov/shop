import React, {Component} from 'react';
import {Button, Container, Segment, Grid, Header} from 'semantic-ui-react'

import classnames from 'classnames';
import logo from './logo.svg';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import TopMenu from "../TopMenu/index";
import AdvertiseSegment from "../AdvertiseSegment/index";

class About extends Component {
    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('About', className)} {...props}>
                <TopMenu/>
                <AdvertiseSegment/>

                <Container style={{ marginTop: '3em' }}>
                    <Button>Default</Button>
                    <Button primary>Primary</Button>
                    <Button secondary>Secondary</Button>
                    <Button basic>Basic</Button>
                    <Button compact>Compact</Button>
                </Container>
            </div>
        );
    }
}

export default About;
