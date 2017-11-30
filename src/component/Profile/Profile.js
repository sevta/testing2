import React, { Component } from 'react'
import Styled from 'styled-components'
import { color } from '../styles/global'
import { app , base } from '../../config/base'

class Profile extends Component {
   constructor(props) {
      super(props)
      this.state = {
         user: null,
         loading: true
      }
   }
   
   componentWillMount() {
      const user = app.auth().currentUser
      this.setState({ user })
      console.log('will mount')
      console.log(app.storage())
   }

   uploadFile = e => {
      console.log(e.target.files)
      const storageRef = app.storage().ref('/profile/')
      const file = e.target.files[0]
      const uploadTask = storageRef.child(`background/${this.state.user.uid}`).put(file)
      uploadTask.on('state_changed' , snapshot => {
         let progress = (snapshot.bytesTranferred / snapshot.totalBytes) * 100
         console.log('upload is' , progress)
      } , err => {
         console.log('err' , err)
      } , () => {
         const downloadURL = uploadTask.snapshot.downloadURL
         console.log(downloadURL)
         base.post(`users/${this.state.user.uid}` , {
            data: {
               background: downloadURL
            }
         })
      })
   }

   componentDidMount() {
      console.log('mounted')
      this.setState({ loading: false })
   }

   render() {
      return (
         <div>
            { this.state.loading ? (
               <h1>Loading...</h1>
            ) : null }
            <h3>Profile ...</h3>
            <HeaderProfile>
               <Pic>
                  <img
                  style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     objectPosition: 'center'
                  }}
                  src={this.state.user.photoURL} alt=""/>
               </Pic>
               <Username>{this.state.user.displayName}</Username>
               <input type='file' className="btn btn-success btn-sm"
                  onChange={this.uploadFile}
                  style={{
                     position: 'absolute',
                     right: 30,
                     bottom: 30
                  }}
               />
            </HeaderProfile>
         </div>
      );
   }
}

const Username = Styled.div`
   font-size: 20px;
   color: ${color.red};
`

const HeaderProfile = Styled.div`
   width: 100%;
   height: 400px;
   background: ${props => props.auth ? `url(${props.pic})` : 'white'};
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   position: relative;
`
const Pic = Styled.div`
   width: 120px;
   height: 120px;
   border-radius: 50%;
   overflow: hidden;
   background: white;
   margin-bottom: 30px;
`

export default Profile;