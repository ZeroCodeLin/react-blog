import React from 'react';
import {Col} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch,hashHistory} from 'react-router-dom'
import BlogNav from '../components/BlogNav'
import Blog from '../Blog'
import BlogSearch from '../blog/BlogSearch'

import './router.css'

function Routerss({hashHistory}) {
    return (
      <Router history={hashHistory}>
        <div>
          <BlogNav />
          <div className="container blog-content">
            <Col xs={12} md={10}>
              <Switch>
                <Route path="/" component={Blog}/>

              </Switch>
            </Col>
            <Col xs={6} md={2} xsHidden smHidden>
              <BlogSearch />
            </Col>
          </div>
        </div>
      </Router>
    )
}

export default Routerss;
