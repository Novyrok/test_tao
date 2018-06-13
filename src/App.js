import React, { Component } from 'react';
import './App.css';
import AllUsers from './components/AllUsers.js'
import userData from './database.json'

class App extends Component {

  state= {
    users : []
  }

  componentDidMount() {
    this.setState({ users : userData })
  }

  render() {

    const users = this.state.users.map( user => 
      <AllUsers  lastname={user.lastname} firstname={user.firstname} />
    )

    return (
      <div className="App">
        <div>{users}</div>
      </div>
    )
  }
}

export default App;