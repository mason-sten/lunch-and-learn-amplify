import React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import PostIndex from "../pages/PostIndex";
import PostNew from "../pages/PostNew";
import PostShow from "../pages/PostShow";
import { routes } from "./routes";

const UnhandledError: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const errorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error
  // E.g. log to an error logging client here
};

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={UnhandledError} onError={errorHandler}>
      <Router>
        <Switch>
          {/* Default Layout Routes */}
          <Route path={routes.path}>
            <DefaultLayout>
              <Switch>
                <Route path={routes.new.path} component={PostNew} />
                <Route path={routes.root.show.path} component={PostShow} />
                <Route path={routes.root.path} component={PostIndex} />
              </Switch>
            </DefaultLayout>
          </Route>

          <Redirect to={routes.path} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
