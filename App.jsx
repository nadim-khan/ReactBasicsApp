import React from 'react';

import './public/stylesheet/style.css';
import './public/stylesheet/styleNew.scss';

import { BrowserRouter as Router, Link, Switch,Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Topics from './components/Topics.jsx';
import Contact from './components/Contact.jsx';



const Header = () => <h1>Header</h1>;
function Footer(props) {
    return <h1>Footer</h1>;
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link> </li>
                        <li><Link to="/topics">Topics</Link> </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/topics" component={Topics} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>

        )
    }
}

export default App;