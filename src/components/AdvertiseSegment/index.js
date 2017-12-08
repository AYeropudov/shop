import React, {Component} from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react'
import './style.css';
import logo from './logo.svg'

class AdvertiseSegment extends Component {
    render() {
        return (
            <Segment vertical>
                <Grid container stackable verticalAlign='middle' centered>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default AdvertiseSegment;
