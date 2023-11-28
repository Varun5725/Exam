// Header.js
import React from 'react';
import "../App.css";

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)}>SHOPPING CART</div>
            <div onClick={() => props.handleShow(true)}> CART<sup>{props.count}</sup></div>
        </div>
    );
}
export default Header;