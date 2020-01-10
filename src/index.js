import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import Projects from './components/Projects';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path='/musics' render={() => <Header><MusicMaster /></Header>} />
            <Route path='/projects' render={() => <Header><Projects /></Header>} />
        </Switch>
    </Router>, 
    document.querySelector('#root')
);
