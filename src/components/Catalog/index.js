import React, {Component} from 'react';
import {Button, Container, Segment, Grid, Header, Menu, Visibility} from 'semantic-ui-react'

import classnames from 'classnames';
import logo from './logo.svg';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import TopMenu from "../TopMenu/index";
import AdvertiseSegment from "../AdvertiseSegment/index";

class Catalog extends Component {
    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('About', className)} {...props}>
                <TopMenu/>
                <AdvertiseSegment/>

                <Segment style={{marginTop: '3em'}}>
                    <Grid>
                        <Grid.Row columns={2} only='tablet computer'>
                            <Grid.Column width={2}>
                                <Menu vertical>
                                    <Menu.Item>
                                        {/**/}
                                        <Menu.Header>Категория 1</Menu.Header>
                                        <Menu.Menu>
                                            <Menu.Item name='Товары 1.1' active={false}/>
                                            <Menu.Item name='Товары 1.2' active={false}/>
                                        </Menu.Menu>
                                        <Menu.Header>Категория 2</Menu.Header>
                                        <Menu.Menu>
                                            <Menu.Item name='Товары 2.1' active={false}/>
                                            <Menu.Item name='Товары 2.2' active={false}/>
                                        </Menu.Menu>
                                        {/**/}
                                    </Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={14}>
                                <Header as='h3'>ssss</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default Catalog;
