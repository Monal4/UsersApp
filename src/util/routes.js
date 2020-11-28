import { Route, Switch, BrowserRouter } from "react-router-dom";
import ViewPage from '../Pages/ViewPage.jsx'
import PostPage from '../Pages/PostPage'
import React from 'react'

const Routes = () => {
      return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ViewPage} />
                    <Route exact path='/posts/:userId' component={PostPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Routes;