import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username
    };

    console.log(newUser);
    axios.post('http://localhost:5000/users/add', newUser)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
    window.location = '/create';
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" required value={this.state.username} onChange={this.onChangeUsername}/>
          </div>
          <div className="form-group">
              <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}