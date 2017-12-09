import React, {Component} from 'react';
import {Segment, Grid, Header, Tab, Image} from 'semantic-ui-react'
import './style.css';
import logo from './logo.svg'

class AdvertiseSegment extends Component {

    render() {

        const panes = [
            { menuItem: 'Tab 1', render: () =>
                    <Tab.Pane attached='top'>
                        <Image src='/assets/images/advertise/1.png' fluid />
                    </Tab.Pane>
            },
            { menuItem: 'Tab 2', render: () =>
                    <Tab.Pane attached='top'>
                        <Image src='/assets/images/advertise/2.png' fluid />
                    </Tab.Pane>
            },
            { menuItem: 'Tab 3', render: () =>
                    <Tab.Pane attached='top'>
                        <Image src='/assets/images/advertise/3.png' fluid />
                    </Tab.Pane>
            },
        ];

        return (
            <Segment vertical>
                <Grid container stackable verticalAlign='middle' centered>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Tab menu={{ attached: 'bottom' }} panes={panes} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default AdvertiseSegment;
