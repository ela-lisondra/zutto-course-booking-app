import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap"
import Swal from "sweetalert2"

export default function Register() {


	const [email,setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isActive, setIsActive] = useState(true)

	useEffect(() =>{

		if (email !== "" && password !== ""){
			setIsActive(true)
		}else {
			setIsActive(false)
		}

	},[email, password])
	
	function loginUser(e){
		e.preventDefault()
		setEmail("")
		setPassword("")

        Swal.fire({
			icon:"success",
			title: "Successfully Logged in.",
			text: "Thank you for Logging in to Zuitt Booking System!"
        })
    }
        localStorage.getItem("email", email)

	return (
			<>
				<h1 className="text-center">Login</h1>
				<Form onSubmit={e => loginUser(e)}>					
					
					<Form.Group controlId="userEmail">
						<Form.Label>
							Email
						</Form.Label>
						<Form.Control type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}required />	
					</Form.Group>

					<Form.Group controlId="userPassword">
						<Form.Label>
							Password
						</Form.Label>
						<Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
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
