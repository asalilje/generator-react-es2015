import React, {PropTypes} from 'react';

const Link = ({active, children, onClick}) => {

    const onLinkClick = e => {
        e.preventDefault;
        onClick();
    };

    if (active) {
        return <span>{children}</span>;
    }
    
    return <a href="#" onClick={e => onLinkClick(e)}>{children}</a>;
    
};

Link.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool
};

export default Link;