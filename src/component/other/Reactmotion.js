import React, { Component } from 'react'
import { Motion , spring } from 'react-motion'

class Reactmotion extends Component {
   toggle = e => {
      e.preventDefault()
   }

   render() {
      return (
         <div>
            <h1>React Motion ...</h1>
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
                        {value => <div className="box" style={s.box}>{value.x}</div>}
                     </Motion>
                     <a href="" className="btn btn-info" onClick={this.toggle}>Toggle</a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const s = {
   box: {
      width: 300,
      height: 300,
      background: 'deepskyblue'
   }
}

export default Reactmotion;