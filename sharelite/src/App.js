import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// const pages = [
//   {
//     pageLink: '/',
//     view: Home,
//     displayName: 'Home',
//     animationDelayForNavbar: 0.2,
//   },
//   {
//     pageLink: '/Feed',
//     view: FeedPage,
//     displayName: 'Feeds',
//     animationDelayForNavbar: 0.2,
//   }
// ];

import {RootPage } from "./Containers/RootPage";
import {FeedPage }from './Containers/FeedPage';
export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <RootPage />
          </Route>
          <Route path="/feed">
            <FeedPage/>
          </Route>
        </Switch>
    </Router>
  );
}