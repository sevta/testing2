import React, { Component } from 'react';
import { app , gmailProvider , ba } from '../../config/base'
import { Button } from '../styles/global'
import Styled from 'styled-components'
import { color } from '../styles/global'

import './Auth.css'

class Login extends Component {
   constructor(props) {
      super(props)
      this.state = {
         email: '',
         password: '',
         error: false,
         error_msg: ''
      }
   }

   onChange = e => {
      this.setState({ [e.target.name]: e.target.value , error: false, error_msg: '' })
   }

   loginWithGmail = e => {
      e.preventDefault()
      app.auth().signInWithPopup(gmailProvider).then(user => {
      }).catch(error => {
         console.log(error)
      })
   }

   login = e => {
      e.preventDefault()
      const { email , password } = this.state
      app.auth().signInWithEmailAndPassword(email , password).catch(err => {
         if (err) {
            this.setState({ error: true , error_msg: err.message })
         } else {
            this.setState({ error: false , error_msg: '' })
         }
      })
   }

   close = () => {
      this.setState({error: false , error_msg: ''})
   }

   render() {
      return (
         <div className='container-login'>
         {this.state.error && (
            <Error onClick={this.close}>{this.state.error_msg}</Error>
         )}
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <form>
                     <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"
                           name='email'
                           onChange={this.onChange}
                        />
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                           name='password'
                           onChange={this.onChange}
                        />
                     </div>
                     <div className="form-group" style={{
                        marginTop: 60
                     }}>
                        <Button 
                           primary
                           onClick={this.login}
                        >Login</Button>
                     </div>
                     <div className="form-group">
                        <Button 
                           secondary
                           onClick={this.loginWithGmail}
                        >Login With Gmail</Button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         </div>
      );
   }
}

const Error = Styled.div`
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   color: white;
   background: ${color.red};
   padding: 20px;
   text-align: center;
`

export default Login;