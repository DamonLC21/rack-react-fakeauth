import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    username: "",
    error: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.username)
      .then(res => {
        if(res.id){
          this.props.history.push('/home')
        }
        else {
          this.setState({
            error: res.error
          })
        }
      })
  }

  render() {
    return (
      <div>
        <p>Please Log In</p>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="username" 
            value={this.state.username} 
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        {this.state.error ? <p>{this.state.error}</p> : null }
      </div>
    )
  }
}
