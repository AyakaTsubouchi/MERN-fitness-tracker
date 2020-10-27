import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import ExerciseList from "./components/ExerciseList"
import EditExercise from "./components/EditExercise"
import CreateExercise from "./components/CreateExercise"
import CreateUser from "./components/CreateUser"
import Test from "./components/Test"

function App() {
  return (
    <Router>
    <div className="container">
      
    
    <Navbar />
    <br/>
    <Route path="/" exact component={ExerciseList}/>
    <Route path="/edit/:id"  component={EditExercise}/>
    <Route path="/create" component={CreateExercise}/>
    <Route path="/user" component={CreateUser}/>
    <Route path="/test" component={Test}/>
      
    </div>
    </Router>
  );
}

export default App;
