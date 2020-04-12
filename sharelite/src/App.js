import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {RootPage } from "./Containers/RootPage";
export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <RootPage />
          </Route>
        </Switch>
    </Router>
  );
}