import React from 'react';
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav style={navbarStyle}>
            <div style={logoStyle}>Your Logo</div>
            <ul style={navListStyle}>
                <li style={navItemStyle}>{props.title}</li>
                <li style={navItemStyle}>{props.title2}</li>
                <li style={navItemStyle}>{props.title3}</li>
                <li style={navItemStyle}>Contact Us</li>
            </ul>
        </nav>
    );
}

const navbarStyle = {
    background: '#3498db',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'background 0.3s',
};

const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
};

const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
};

const navItemStyle = {
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background 0.3s, transform 0.2s',
};

navItemStyle[':hover'] = {
    background: '#2980b9',
    transform: 'scale(1.1)',
};

//propTypes are defining  of datatypes of the props that are passed on a component.
Navbar.propTypes={
    title:PropTypes.string,
    title2 : PropTypes.string,
    title3: PropTypes.string}

//Suppose no prop's element is passed then the default values will be passed which you can mention below
Navbar.defaultProps={
    title: 'Stranger',
    title2: 'About',
    title3: 'Contact',


}    