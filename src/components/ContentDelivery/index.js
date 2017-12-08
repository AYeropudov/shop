import React, {Component} from 'react';
import {Button, Container, Grid, Header} from 'semantic-ui-react'
import classnames from 'classnames';
import './style.css';
import 'semantic-ui-css/semantic.min.css';


class Delivery extends Component {
    render() {
        const {className, ...props} = this.props;
        return (
            <Grid container stackable verticalAlign='middle' centered>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>Тут про доставку например</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Delivery;
