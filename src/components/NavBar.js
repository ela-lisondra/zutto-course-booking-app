import React, {useContext} from 'react'
// Destructure  the react-bootstap module and only get the component you want from the module.
import {Navbar, Nav} from 'react-bootstrap'

import UserContext from '../userContext'
export default function NavBar(){

	const {user} = (useContext(UserContext))

	// LONG CUT ANSER TO Nav.LINKS ACTIVITY
	// const [isLoggedIn, setIsLoggedIn] = useState(false)

	// useEffect(()=>{
	// 	isLoggedIn(user.email===null) {
	// 		setIsLoggedIn(false)

	// 	} else {
	// 		setIsLoggedIn(true)
	// 	}
	// }, [user.email])

	return (

		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">React-Booking</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/courses">Courses</Nav.Link>
					{
						user.email
						?	
							user.isAdmin 
							?
								<>
									<Nav.Link href="/courses/create">Create</Nav.Link>
									<Nav.Link href="/logout" >Logout</Nav.Link>
								</>
								:
								<Nav.Link href="/logout" >Logout</Nav.Link>
					
						:
						<>
							<Nav.Link href="/login">Login</Nav.Link>
							<Nav.Link href="/register">Register</Nav.Link>
						</>
					}
	
					
				</Nav>
			</Navbar.Collapse>
		</Navbar>

		)
		
}