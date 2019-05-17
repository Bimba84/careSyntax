import React from 'react';
import logo from './logo.svg';

interface IProps {
    name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <h4>Hello, {props.name}!</h4>
    </div>
);

export default Header;