import React from 'react';
import {BrowserRouter as Router, Route, Switch,hashHistory} from 'react-router-dom'
import BlogNav from '../components/BlogNav'
import Blog from '../Blog'

import './router.css'

function Routerss({hashHistory}) {
    return (
      <Router history={hashHistory}>
        <div>
          <BlogNav />
          <div className="container blog-content">
            <Switch>
              <Route path="/" component={Blog}/>

            </Switch>
          </div>
        </div>
      </Router>
    )
}

export default Routerss;
