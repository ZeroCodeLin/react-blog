import React from 'react';
import {Col} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch,hashHistory} from 'react-router-dom'
import BlogNav from '../components/BlogNav'
import BlogList from '../blog/BlogList'
import BlogDetail from '../blog/BlogDetail'

import BlogSearch from '../blog/BlogSearch'

import './router.css'

function Routerss({hashHistory}) {
    return (
        <div>
          <BlogNav />
          <div className="container blog-content">
            <Col xs={12} md={9}>
                <Router history={hashHistory}>
                    <div>
                        <Route exact path="/" component={BlogList}/>
                        <Route exact path="/Detail" component={BlogDetail}/>
                    </div>

                </Router>
            </Col>

              <BlogSearch />
            
          </div>
        </div>

    )
}

export default Routerss;
