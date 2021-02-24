import React, {useState, useEffect, useContext} from 'react'
import {Form, Button} from "react-bootstrap"
import Swal from "sweetalert2"

import {Redirect} from 'react-router-dom'
import users from '../data/users'

import UserContext from '../userContext'
export default function Login() {
	const {user, setUser} = useContext(UserContext)
	console.log(user)

	const [email,setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isActive, setIsActive] = useState(true)
	const [willRedirect, setWillRedirect] = useState(false)

	useEffect(() =>{

		if (email !== "" && password !== ""){
			setIsActive(true)
		}else {
			setIsActive(false)
		}

	},[email, password])
	
	function loginUser(e){
		e.preventDefault()
        
        const match = users.find(user => {
            
        
            return (user.email === email && user.password === password)
        })

    //    console.log(match) 
        if(match) {

            localStorage.setItem("email", email)
			localStorage.setItem("isAdmin", match.isAdmin)
			setUser ({
				email:email,
				isAdmin: match.isAdmin
			})
			setWillRedirect(true)
            Swal.fire({
                icon:"success",
                title: "Successfully Logged in.",
                text: "Thank you for Logging in to Zuitt Booking System!"
            })
        } else {
            Swal.fire({
                icon:"error",
                title: "Log In Unsuccessful.",
                text: "User Credentials are Wrong."
            })
        }
        
        setEmail("")
        setPassword("")
	
    }
	return (
		willRedirect
		?
		<Redirect to="/" />
		:
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
	)
}
