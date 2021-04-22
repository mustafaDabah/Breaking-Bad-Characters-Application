import React from 'react';
import { GlobalProvider } from './ContextAPI/GlobalState';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './Components/Home';
// import Character from './Components/Character';

function App () {
  // lazy component 
  const LazyCharacter = React.lazy(() => import("./Components/Character"));

  return (
    <Router>
      <GlobalProvider>
        <div className="app">
          <React.Suspense fallback="loading...">
            <Route exact path="/" component={Home} />
            <Route exact path="/character/:id" component={LazyCharacter} />
          </React.Suspense>
        </div>
      </GlobalProvider> 
    </Router>
  );
}

export default App;
