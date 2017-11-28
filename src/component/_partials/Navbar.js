import React, { Component } from 'react'
import Styled from 'styled-components'

class Navbar extends Component {
   render() {
      return (
         <div>
            <Nav></Nav>
         </div>
      );
   }
}

const Nav = Styled.div`
   width: 100%;
   height: 40px;
   background: 2px 2px 10px rgba(0,0,0,0.1);
`

export default Navbar;