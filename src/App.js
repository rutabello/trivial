import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Screens/Home';
import Game from './Screens/Game';
import End from './Screens/End';
import MyProvider from './Context/MyProvider';

import './App.css';

function App() {
    return (
        <MyProvider>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div>
                            <Navbar />
                            <Home />
                        </div>
                    )}
                />

                <Route
                    path="/game"
                    render={() => (
                        <div>
                            <Navbar />
                            <Game />
                        </div>
                    )}
                />

                <Route
                    path="/end"
                    render={() => (
                        <div>
                            <Navbar />
                            <End />
                        </div>
                    )}
                />
            </Switch>
        </MyProvider>
    );
}

export default App;
