import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import SearchResults from './components/SearchResults'
import ItemPage from './components/ItemPage'
import ErrorPage from './components/ErrorPage'

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={SearchResults}/>
        <Route path="item/:id" component={ItemPage}/>
        <Route path="*" component={ErrorPage}/>
    </Route>
);

export default routes;