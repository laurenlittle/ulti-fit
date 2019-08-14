import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      exercises: []
    }

    this.deleteExercise = this.deleteExercise.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
    .then(response => {
        this.setState({
          exercises: response.data
        })
    })
    .catch(error => {
      console.log(error);
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  deleteExercise(id) {

     axios.delete('http://localhost:5000/exercises/'+id)
       .then(response => {
         //  @TODO Add to UI to inform user that exercise was deleted successfully
        console.log(response.data)

        this.setState({
          exercises: this.state.exercises.filter(exercise => exercise._id !== id)
        })

       })
       .catch(error => {
         console.log(error);
       })

    console.log('Exercise deleted successfully!');
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}