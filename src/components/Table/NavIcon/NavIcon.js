import React from 'react';
import './NavIcon.css'


const NavIcon = (props) => {

    let nav = props.sort === 'asc'?
        <img className="arrow down" src={'https://www.pinclipart.com/picdir/big/215-2150988_png-file-png-clipart.png'}/>
        : <img className="arrow up" src={'https://www.pinclipart.com/picdir/big/215-2150988_png-file-png-clipart.png'}/>;

    return (
        <span>
            {nav}
        </span>
    );
}

export default NavIcon;