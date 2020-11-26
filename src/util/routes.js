import { Route, Switch, BrowserRouter } from "react-router-dom";
import Users from '../Components/users-view-component.jsx/usersView.component'
import UserPost from '../Components/Users-post-component/userPost.component'

const Routes = () => {
      return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Users} />
                    <Route exact path='/posts/:userId' component={UserPost} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Routes;