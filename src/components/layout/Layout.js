import React from "react";
import Header from "./Header";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFoundPage from "../../pages/404";
import Home from "../../pages/Home";
import CountryTemplate from '../../templates/CountryTemplate';
import Proptypes from 'prop-types';

const Layout = ({darkmodeState, darkmodeToggle}) => {
  return (
    <>
      <Header darkmodeState={darkmodeState} darkmodeToggle={darkmodeToggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country" render={() => <Redirect to="/" />} />
        <Route path="/country/:code" component={CountryTemplate} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

Layout.propTypes = {
    darkmodeToggle: Proptypes.func.isRequired,
    darkmodeState: Proptypes.bool.isRequired
}

export default Layout;
