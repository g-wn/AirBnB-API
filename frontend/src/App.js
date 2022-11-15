import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from './store/session';
import * as spotsActions from './store/spots';
import Navigation from './components/Navigation';
import Filters from './components/Filters';
import Splash from './components/Splash';
import SpotDetail from './components/SpotDetail';
import HostSplash from './components/HostSplash';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(spotsActions.getSpots());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Switch>
          <Route
            exact={true}
            path={`/`}
          >
            <Navigation isLoaded={isLoaded} />
            <Filters />
            <Splash />
          </Route>
          <Route
            path={`/spots/:spotId`}
            exact={true}
          >
            <Navigation isLoaded={isLoaded} />
            <SpotDetail />
          </Route>
          <Route
            path={`/host`}
            exact={true}
          >
            <HostSplash isLoaded={isLoaded} />
          </Route>
          <Route>Page Not Found</Route>
        </Switch>
      </>
    )
  );
}

export default App;
