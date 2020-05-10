import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/MyProvider';


const Navbar = () => {

    const { score } = useContext(MyContext);

    return (
        <div className="columns">
            <div className="column"><Link to="/">Home</Link></div>
            <div className="column">TRIVIAL</div>
            <div className="column">{score}</div>
        </div>
    );
};

export default Navbar;
