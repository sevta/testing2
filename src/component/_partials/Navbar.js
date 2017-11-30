import React, { Component } from 'react'
import Styled from 'styled-components'
import { color } from '../styles/global'
import { Link } from 'react-router-dom'
import { app } from '../../config/base'

class Navbar extends Component {
   logout = e => {
      e.preventDefault()
      app.auth().signOut().then(() => {
         console.log('outed')
      })
   }
   render() {
      return (
         <div>
            <Nav>
               <Logo>Rec</Logo>
               <LinkContainer>
                  <Navlink to='/'>Home</Navlink>
                  <Navlink to='/profile'>Profile</Navlink>
                  <Navlink to='/other'>Other</Navlink>
                  <Logoutlink onClick={this.logout}>Logout</Logoutlink>
               </LinkContainer>
            </Nav>
         </div>
      );
   }
}

const Nav = Styled.div`
   width: 100%;
   height: 50px;
   box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
   padding: 0px 30px;
   position: relative;
`

const Navlink = Styled(Link)`
   font-size: 14px;
   color: #333;
   position: relative;
   margin-right: 20px;
`
const Logoutlink = Styled.a`
   font-size: 14px;
   color: #333;
   position: absolute;
   margin-right: 20px;      
   cursor: pointer;
`


const Logo = Styled.div`
   font-family: pacifico;
   color: ${color.red};
   font-size: 24px;
   line-height: 50px;
`

const LinkContainer = Styled.div`
   width: auto;
   height: auto;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 150px;
`

export default Navbar;