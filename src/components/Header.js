import React from 'react';

const Header = (props) => {
  return (
    <header>
    <h1>{props.heading}</h1>
    <h3>Get shit done!</h3>
    </header>
  )
}

export default Header;