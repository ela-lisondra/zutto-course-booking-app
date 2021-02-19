import React from 'react'
// Destructure  the react-bootstap module and only get the component you want from the module.
import {Navbar, Nav} from 'react-bootstrap'

export default function NavBar(){


	return (

		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">React-Booking</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Courses</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

		)
		
}