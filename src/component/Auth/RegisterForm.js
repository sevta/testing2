import React, { Component } from 'react'
import './Auth.css'
import Styled from 'styled-components'
import { Button } from '../styles/global'

class RegisterForm extends Component {
   constructor(props) {
      super(props)
      this.state = {
         username: '',
         email: '',
         password: '',
         password2: ''
      }
      this.onChange = this.onChange.bind(this)
      this.register = this.register.bind(this)
   }

   register = e => {
      e.preventDefault()
      const { username , email , password , password2 } = this.state
      const user = {
         username,
         email,
         password,
         password2        
      }
      this.props.register(user)
   }

   onChange = e => {
      this.setState({ [e.target.name]: e.target.value })
      this.props.close()
   }

   render() {
      const { username , email , password , password2 } = this.state
      return (
         <div>
             <form action="">
               <div className="form-group">
                  <label htmlFor="">Username</label>
                  <input type="text" 
                     className="form-control" 
                     name='username'
                     value={username}
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="email" 
                     className="form-control" 
                     name='email'
                     value={email}
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <label>Password</label>
                  <input type="password" 
                     className="form-control" 
                     name='password'
                     value={password}
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="">Confirm Password</label>
                  <input type="password" 
                     className="form-control" 
                     name='password2'
                     value={password2}
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group" style={{marginTop: 60}}>
                  <Button primary onClick={this.register}>Sign Up</Button>
               </div>
            </form>
         </div>
      );
   }
}

export default RegisterForm;