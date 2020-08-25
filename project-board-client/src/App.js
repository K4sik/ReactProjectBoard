import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectTask from './components/ProjectTask/AddProjectTask';
import UpdateProjectTask from './components/ProjectTask/UpdateProjectTask';
import LogIn from './components/Login';
import Register from './components/Register';
import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          
          <Route exact path="/" component={ProjectBoard} />
          <Route exact path="/addProjectTask" component={AddProjectTask} />
          <Route exact path="/updateProjectTask/:pt_id" component={UpdateProjectTask} />

          <Route exact path="/logIn" component={LogIn}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
