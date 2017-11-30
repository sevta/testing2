import React, { Component } from 'react';
import { Switch , Route , Redirect , withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { app , base } from './config/base'
import { AnimatedSwitch } from 'react-router-transition'

// component -----------------------------
import Login from './component/Auth/Login'
import Home from './component/Home/Home'
import Profile from './component/Profile/Profile'
import Register from './component/Auth/Register'
import About from './component/About/About'
import PropTypes from 'prop-types'
import Navbar from './component/_partials/Navbar'
import StartScreen from './component/common/StartScreen'
import IndexLogin from './component/Auth/IndexLogin'
import Reactmotion from './component/other/Reactmotion'

// style -----------------------------
import './component/styles/global.css'

// authed routes -------------------------------------------------
const PrivateRoutes = ({component: Component , auth , ...rest}) => 
   <Route
		{...rest}
		render={props => 
			auth 
			? <Component {...props} /> 
			: <Redirect to={{pathname: '/index' , state: {from: props.location}}} />
		}
   />

const PublicRoutes = ({component: Component , auth , ...rest}) => 
	<Route
	   {...rest}
	   render={props =>
			auth === false 
			? <Component {...props} /> 
			: <Redirect to={{pathname: '/' , state: {from: props.location}}} />
	   }
	/>

class Root extends Component {
   constructor(props) {
		super(props)
		this.state = {
			auth: false,
			isLoggedin: false
		}
	}
	

   componentWillMount() {
		this.removeListener = app.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ auth: true , isLoggedin: true })
				this.props.dispatch({
					type: 'LOGIN',
					payload: true,
					user: user
				})
				const users = {
					id: user.uid,
					username: user.displayName,
					email: user.email,
					avatar: user.photoURL
				}
				base.post(`users/${user.uid}` , {
					data: users
				})
			} else {
				this.setState({ auth: false , isLoggedin: true })
				this.props.dispatch({
					type: 'LOGIN',
					payload: false,
					user: null
				})
			}
		})
	}


	componentWillUnmount() {
		this.removeListener()
	}

   render() {
	const { auth , isLoggedin } = this.state
	return (
		<div>
			{ isLoggedin ? (
				<div>
					{ auth ? <Navbar /> : null }
					<Switch location={this.props.location}>
						<PublicRoutes auth={auth} path='/register' component={Register} />
						<PublicRoutes auth={auth} path='/login' component={Login} />
						<PublicRoutes auth={auth} path='/index' component={IndexLogin} />
						
						<PrivateRoutes auth={auth} exact path='/' component={Home} />
						<PrivateRoutes auth={auth} exact path='/about' component={About} />
						<PrivateRoutes auth={auth} exact path='/profile' component={Profile} />
						<PrivateRoutes auth={auth} exact path='/other' component={Reactmotion} />
					</Switch>
				</div>
			) : <StartScreen /> }
		</div>
	);
   }
}

PublicRoutes.PropTypes = {
	auth: PropTypes.bool.isRequired
}

PrivateRoutes.PropTypes = {
	auth: PropTypes.bool.isRequired
}

const stateToProps = state => {
	return {
		auth: state.auth
	}
}

export default withRouter(connect(stateToProps)(Root));