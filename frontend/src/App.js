import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import {Component} from 'react'

class App extends Component {
  state = {
    user: {}
  }

  login = (username) => {
    return fetch('http://localhost:9393/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response.error){
        alert(response.error)
      }
      else{
        this.setState({
          user: response
        })
      }
      return response
    })

  }

  render(){
    return (
      <div className="App">
        <Route path="/" exact render={(props) => <Login {...props} login={this.login} /> } />
        <Route path="/home" exact render={(props) => <Home {...props} /> } />
      </div>
    );
  }
}

export default App;
