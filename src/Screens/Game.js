/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Shuffle from '../Utils/Shuffle';
import { MyContext } from '../Context/MyProvider';

const Game = ({ history }) => {

    const shuffleAnswers = (questionObj) => {

        const correctAnswer = questionObj.correct_answer;
        const incorrectAnswers = questionObj.incorrect_answers;

        if (!correctAnswer || !incorrectAnswers) {
            return [];
        }

        const allAnswers = [...incorrectAnswers, correctAnswer];

        return Shuffle(allAnswers);
    };

    const POINTS = {
        easy: 100,
        medium: 300,
        hard: 500,
    };

    const { questions, addScoreToContext } = useContext(MyContext);

    const [index, setIndex] = useState(0);

    const [message, setMessage] = useState('');

    const questionObj = questions[index] || {};

    const { question } = questionObj;

    const [answers, setAnswers] = useState(shuffleAnswers(questionObj));

    useEffect(() => {
        setAnswers(shuffleAnswers(questionObj));
    }, [index]);

    const checkCoincidence = (questionObj, chosenanswer) => {

        const pointsAwarded = POINTS[questionObj.difficulty];

        if (questionObj.correct_answer === chosenanswer) {
            setIndex(index + 1);
            addScoreToContext(pointsAwarded);
            setMessage(`You just won +${pointsAwarded}`);

            setTimeout(() => {
                setMessage('');
            }, 1500);
        }
    };

    if (!questions.length) {

        return null;
    }

    if (index === questions.length) {
        history.push('/end');
    }

    return (
        <div>
            <h3>{question}</h3>
            {answers.map((answer) => <button onClick={() => checkCoincidence(questionObj, answer)} type="button">{answer}</button>)}
            {message}
        </div>
    );
};

export default withRouter(Game);
