/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        questions: [],
        score: 0,
        level: '',
    }

    render() {

        const { questions, score } = this.state;
        const { children } = this.props;

        return (
            <MyContext.Provider value={{
                questions,
                score,
                // addPoints: (points) => this.setState({
                //     points: total_app_points + points,
                // }),

                postQuestionsIntoContext: (data) => this.setState({ questions: data }),

                addScoreToContext: (data) => this.setState({ score: score + data }),
            }}
            >
                {children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;
