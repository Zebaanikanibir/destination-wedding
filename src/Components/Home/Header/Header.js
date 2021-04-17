import React from 'react';
import NavHead from '../NavHead/Navhead';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container" >
            <NavHead></NavHead>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;