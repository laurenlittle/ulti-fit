import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import CreateExercise from "./components/Create-Exercise";
import EditExercise from "./components/Edit-Exercise";
import CreateUser from './components/Create-User';
import ExercisesList from './components/Exercise-List';

function App() {
 return (
   <Router>
    <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </div>
   </Router>
 );
}

export default App;