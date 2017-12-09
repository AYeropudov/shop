import React, {Component} from 'react';
import { Container,  Menu } from 'semantic-ui-react'
import './style.css';
import logo from './logo.svg'
class TopMenu extends Component {
    render() {
        return (
                <Menu stackable>
                    <Menu.Item>
                        <img src={logo} />
                    </Menu.Item>
                    <Menu.Item as='a' href='#'>Акции</Menu.Item>
                    <Menu.Item as='a' href='/catalog'>Каталог</Menu.Item>
                    <Menu.Item as='a' href='/delivery'>Доставка</Menu.Item>
                    <Menu.Item as='a' href='/payments'>Оплата</Menu.Item>
                    <Menu.Item as='a' href="/about">О нас</Menu.Item>
                </Menu>
        );
    }
}

export default TopMenu;
