import React, { Component } from 'react'
import { app , base } from '../../config/base'
import { connect } from 'react-redux'
import FriendList from './FriendList'
import { color } from '../styles/global'
import Spinner from 'react-spinkit'
class Hom extends Component {
   constructor(props) {
      super(props)
      this.state = {
         user: '',
         allUsers: [],
         loading: true
      }
   }
   logout = e => {
      e.preventDefault()
      app.auth().signOut().then(() => {
         console.log('outed')
      })
   }

   componentDidUpdate() {
      console.log(this.state)
   }

   componentWillMount() {
      const user = app.auth().currentUser;
      this.setState({user})
      base.fetch('users' , {
         context: this,
         asArray: true,
         then(data) {
            this.setState({ allUsers: data })
         }
      })
   }

   componentDidMount() {
      setTimeout(() => this.setState({ loading: false }) , 0)
   }

   follow = userData => {
      const { user } = this.state
      base.push(`users/${user.uid}/following` , {
         data: {
            username: userData.username,
            id: userData.id
         },
         then(data) {
            
         }
      })
   }

   render() {
      const { user , allUsers , loading } = this.state
      return (
         <div className='container'>
            {loading ? (
               <h5> Loading.. </h5>
            ) : (
               <div>
               <h3>Hy.. {user.displayName}</h3>
               {allUsers.length > 0 ? allUsers.map((alluser , i) => (
                  <FriendList user={alluser} follow={this.follow} key={i+1} />
               )): <p>Loading...</p>}
               <a href="" className="btn btn-danger btn-sm"
                  onClick={this.logout}
               >Logout</a>
               </div>
            )}

         </div>
      );
   }
}

const stateToProps = state => {
   return {
      auth: state.auth
   }
}

export default connect(stateToProps)(Hom);