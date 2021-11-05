import React from 'react';


const Menu = ({ menu }) => {
    const { name, img, order} = menu;
    return (
        <div className="col-lg-3 col-sm-2 col-10">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{order}</h5>
        </div>
    );
};

export default Menu;