import React from 'react';
import './style.css';

import Navbar from './Components/Nav/Navbar';
import Home from './Containers/Home/Home';
import AddArticle from './Containers/AddArticle/AddArticle';
import Article from './Containers/Article/Article';
import Profile from './Containers/Profile/Profile';
import Contact from './Containers/Contact/Contact';
import Sign from './Containers/Sign/Sign';
import PageError from './Containers/PageError/PageError';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ecrire" exact component={AddArticle} />
          <Route path="/articles/:slug" exact component={Article} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/sign" exact component={Sign} />
          <Route path="/" component={PageError} />
        </Switch>
      </Router>
    </>
  );
}
