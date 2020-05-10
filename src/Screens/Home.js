import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Selector from '../Components/Selector/Selector';
import allCategories from '../Utils/allCategories';
import { MyContext } from '../Context/MyProvider';


const Home = ({ history }) => {

    const [level, setLevel] = useState('Any');
    const [category, setCategory] = useState(0);
    const [rounds, setRounds] = useState(10);

    const { postQuestionsIntoContext } = useContext(MyContext);

    const buildApiUrl = () => {
        // https://opentdb.com/api.php?amount=${rounds}&category=${category}&difficulty=${level}&type=multiple
        // https://opentdb.com/api.php?amount=30&type=multiple&category=14&difficulty=hard
        // https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple

        const categoryParam = category !== 0 ? `&category=${category}` : '';
        const levelParam = level !== 'Any' ? `&difficulty=${level.toLowerCase()}` : '';

        return `https://opentdb.com/api.php?amount=${rounds}${categoryParam}${levelParam}&type=multiple`;
    };

    const playGame = async () => {

        const url = buildApiUrl();
        const request = await fetch(url);
        const response = await request.json();

        postQuestionsIntoContext(response.results);

        history.push('/game');
    };

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    TRIVIAL IMAGE
                </h1>
                <p>
                    Selected category:
                    {category}
                </p>
                <p>
                    Selected level:
                    {level}
                </p>
                <p>
                    Selected number of rounds:
                    {rounds}
                </p>

                <Selector onClick={(option) => setLevel(option)} options={['Easy', 'Medium', 'Hard', 'Any']} />

                <Selector type="dropdown" value={category} onChange={(option) => { setCategory(option); }} options={allCategories} />

                <Selector onClick={(option) => setRounds(option)} options={[10, 15, 20]} />

                <button type="button" onClick={() => playGame()}>PLAY!</button>

            </div>
        </section>
    );
};

export default withRouter(Home);
