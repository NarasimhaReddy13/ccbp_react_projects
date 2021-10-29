import { Route, Switch, Redirect } from "react-router-dom";

import LoginForm from "../LoginComponent/LoginForm";
import Home from "../HomeComponent/Home";
import Products from "../Products/Products";
import NotFound from "../NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const WithRouterApp = () => (
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/products" component={Products} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
);

export default WithRouterApp;