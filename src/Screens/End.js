import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/MyProvider';

const End = () => {

    const { score } = useContext(MyContext);

    return (
        <div>
            <h1>{`Congrats! You've made ${score} points!!`}</h1>
            <Link to="/"><button type="button">Play again</button></Link>
        </div>
    );

};

export default End;
