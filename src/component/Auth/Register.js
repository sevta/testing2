import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import PropTypes from 'prop-types'
import { app } from '../../config/base'
import Styled from 'styled-components'
import { color } from '../styles/global'

const WrapperCenter = Styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px;
`

const Button = Styled.a`
   width: 240px;
   height: 40px;
   background: tomato;
`

class Register extends Component {
   constructor(props) {
      super(props)
      this.state = {
         error: false,
         error_txt: ''
      }
   }

   register = data => {
      console.log(data)
      const username = data.username
      const email = data.email
      const password = data.password
      app.auth().createUserWithEmailAndPassword(email , password).catch(err => {
         console.log(err)
         if (err) {
            this.setState({ error: true , error_txt: err.message })
            
         }
      })
   }

   closeError = () => {
      this.setState({ error: false })
   }

   render() {
      return (
         <WrapperCenter>
            {this.state.error && (
               <Error error={this.state.error_txt} close={this.closeError}/>
            )}
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <RegisterForm register={this.register} close={this.closeError} />
                  </div>
               </div>
            </div>
         </WrapperCenter>
      );
   }
}

const Error = props => 
   <Errors onClick={props.close}>
      <div>{props.error}</div>
   </Errors>

const Errors = Styled.div`
   width: 100%;
   padding: 10px;
   background: ${color.red};
   position: absolute;
   top: 0;
   left: 0;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   cursor: pointer;
`

RegisterForm.PropTypes = {
   register: PropTypes.func.isRequired,
   close: PropTypes.func.isRequired
}

Error.PropTypes = {
   close: PropTypes.func.isRequired
}


export default Register;