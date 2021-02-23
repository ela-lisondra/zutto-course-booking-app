import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap"
import Swal from 'sweetalert2'

export default function Register() {

	const [firstName, setFirstName] = useState("")
	const [lastName,setLastName] = useState("")
	const [email,setEmail] = useState("")
	const [mobileNo, setMobileNo] = useState(0)
	const [password1, setPassword1] = useState("")
	const [password2, setPassword2] = useState("")


	const [isActive, setIsActive] = useState(true)

	useEffect(() =>{

		if((firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password1 !== "" && password2 !== "") && (password1 === password2) && (mobileNo.length === 11) ){
			setIsActive(true)
		}else {
			setIsActive(false)
		}

	},[firstName, lastName, email, mobileNo, password1, password2])
	
	function registerUser(e){
		e.preventDefault()

		setFirstName("")
		setLastName("")
		setEmail("")
		setMobileNo(0)
		setPassword1("")
		setPassword2("")

		Swal.fire({
			icon:"success",
			title: "Successfully Registered.",
			text: "Thank you for registering to Zuitt Booking System!"
		})
	}
	

	return (
			<>
				<h1 className="text-center">Register</h1>
				<Form onSubmit={e => registerUser(e)}>
					<Form.Group controlId="userFirstName">
						<Form.Label>
							First Name
						</Form.Label>
						<Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
	
					</Form.Group>
					<Form.Group controlId="userLastName">
						<Form.Label>
							First Name
						</Form.Label>
						<Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
	
					</Form.Group>
					<Form.Group controlId="userEmail">
						<Form.Label>
							First Name
						</Form.Label>
						<Form.Control type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}required />
	
					</Form.Group>
					<Form.Group controlId="userMobile">
						<Form.Label>
							Mobile No
						</Form.Label>
						<Form.Control type="number" placeholder="Enter Mobile No." value= {mobileNo} onChange={(e)=>setMobileNo(e.target.value)} required />
	
					</Form.Group>
					<Form.Group controlId="userPassword1">
						<Form.Label>
							Password
						</Form.Label>
						<Form.Control type="password" placeholder="Enter Password" value={password1} onChange={(e)=>setPassword1(e.target.value)} required />
	
					</Form.Group>
					<Form.Group controlId="userPassword2">
						<Form.Label>
							Confirm Password
						</Form.Label>
						<Form.Control type="password" placeholder="Enter Password" value={password2} onChange={(e)=>setPassword2(e.target.value)} required />
	
					</Form.Group>
					{
						isActive
						?
						<Button variant="primary" type="submit">Submit</Button>
						:
						<Button variant="primary" disabled>Submit</Button>

					}
				</Form>
			</>
	)}
