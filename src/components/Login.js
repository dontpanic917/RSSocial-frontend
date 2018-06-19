import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';
import { withRouter } from 'react-router-dom'
class Login extends Component {

  state = {
    username: "",
    password: "",
    errors: "",
    is_disabled: true,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password, this.props.history)
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      if(
        this.state.username.length > 0
        && this.state.password.length > 0
      ) {
        this.setState({
          is_disabled: false
        })
      }
        else{
          this.setState({is_disabled: true})
        }
    })
  }

  render(){
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Field>
          <label>Username</label>
          <input placeholder='username'
            type="text"
            onChange={ this.handleChange }
            value={ this.state.username }
            name="username"
            id="username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='password'
            type="password"
            onChange={ this.handleChange }
            value={ this.state.password }
            name="password"
            id="password"/>
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
export default withRouter(connect(null, { login })(Login));
