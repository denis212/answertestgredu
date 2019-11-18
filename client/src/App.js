import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Students from './components/students';
import Courses from './components/courses';
import Programs from './components/programs';
import NotFound from './components/notfound';
import Sidenav from './commons/sidenav';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import StudentForm from './components/studentForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container d-flex">
        <Sidenav />
            <div className="container flex-column">
            <Switch>
                <Route path="/students" component={Students}></Route>
                <Route path="/students/:id"></Route>
                <Route path="/new" component={StudentForm}></Route>
                <Route path="/courses" component={Courses}></Route>
                <Route path="/programs" component={Programs}></Route>
                <Route path="/login" component={LoginForm}></Route>
                <Route path="/register" component={RegisterForm}></Route>
                <Route path="/not-found" component={NotFound}></Route>
                <Redirect from="/" exact to="/students" />
                <Redirect to="/not-found"/>
            </Switch>
            </div>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
