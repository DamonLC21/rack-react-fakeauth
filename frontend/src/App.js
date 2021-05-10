import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import {Component} from 'react'

class App extends Component {
  state = {

  }

  render(){
    return (
      <div className="App">
        <Route path="/" exact render={(props) => <Login {...props} /> } />
        <Route path="/home" exact render={(props) => <Home {...props} /> } />
      </div>
    );
  }
}

export default App;
