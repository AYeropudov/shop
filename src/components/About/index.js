import React, {Component} from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

import classnames from 'classnames';
import logo from './logo.svg';
import './style.css';
import 'semantic-ui-css/semantic.min.css';

class About extends Component {
    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('About', className)} {...props}>
                <Menu size='large' stackable>
                    <Container>
                        <Menu.Item as='a'>Акции</Menu.Item>
                        <Menu.Item as='a'>Каталог</Menu.Item>
                        <Menu.Item as='a'>Доставка</Menu.Item>
                        <Menu.Item as='a'>Оплата</Menu.Item>
                        <Menu.Item as='a'>Оплата</Menu.Item>
                        <Menu.Item as='a'>Оплата</Menu.Item>
                    </Container>
                </Menu>
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
