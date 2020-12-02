import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ROUTES } from "utils/constants";

import Home from "routes/Home";
import PageNotFound from "routes/PageNotFound";
import ErrorBoundary from "components/ErrorBoundary";

import { LanguageContextProvider } from "components/LanguageContext";

const App = () => {
  console.log(
    "Find the repo for this site here https://github.com/angusbezzina/portfolio-typescript",
  );

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <LanguageContextProvider>
          <Route
            render={({ location }) => (
              <TransitionGroup component={React.Fragment}>
                <CSSTransition key={location.key} timeout={1500} classNames="fade">
                  <Switch location={location}>
                    <Route exact path={ROUTES.HOME} component={Home}></Route>
                    <Route exact path={ROUTES.PAGE_NOT_FOUND} component={PageNotFound}></Route>
                    <Redirect to={ROUTES.PAGE_NOT_FOUND} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </LanguageContextProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
