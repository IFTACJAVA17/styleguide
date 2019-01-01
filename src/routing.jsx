import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StyleGuide from './components/styleguide';
import AdminStyleGuide from './components/adminstyleguide';
import Start from './components/start';


const AppRouter = () => (
    <Router>
        <div>
            <Route path='/' exact component={Start} />
            <Route path='/style' component={StyleGuide} />
            <Route path='/admin' component={AdminStyleGuide} />
        </div>
    </Router>
)

export default AppRouter;