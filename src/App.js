import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <ul>
            <li>
              <NavLink exact activeClassName='active-link' to="/">List Page</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <BeaniesPage />
            {/* this home page route should list all the beanies */}
          </Route>
          <Route exact path="/beanies/:id"> 
            <BeanieDetail />
            {/* this route should point to a particulat beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}