import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routse'
import Spinner from '../../components/spinner/Spinner';

const Routes = props => (
  <Suspense fallback={Spinner}>
    <Switch>
      {
        routes.map((obj, i) => (
          <Route
            key={i}
            exact={obj.exact}
            path={obj.path}
            render={matchProps => (
              <obj.component {...matchProps} />
            )}
          />
        ))
      }
      <Redirect from="/" to={props.defaultPath} />
    </Switch>
  </Suspense>
)


export default Routes