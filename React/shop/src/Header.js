import React from 'react';
function Header(props) {
return (
<div>
<button onClick={() => props.handleShow(false)}>SHOPPING CART</button>
<button onClick={() => props.handleShow(true)}>
CART<sup>{props.count}</sup>
</button>
</div>
);
}
export default Header;