import {Component} from "react"

import {Route, Switch} from "react-router-dom"


import Home from "./components/home"

import Login from "./components/login"

import Profile from "./components/profile"

import AddingPost from "./components/addNewPost"

class App extends Component {
    render() {
        return (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/addNewPost" component={AddingPost} />
            </Switch>
        )
    }
}

export default App