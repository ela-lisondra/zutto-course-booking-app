import React, {useContext} from 'react'
import coursesData from '../data/courses'


// components
import Course from '../components/Course'

//react-bootstrap components
import {Table, Button} from 'react-bootstrap'

//import userContext
import UserContext from '../userContext'

export default function Courses(){

	const {user} = useContext(UserContext)
	console.log(user)
	 
	 const courses = coursesData.map(course => {
	 
	 	if(course.onOffer === true){

	 		return(
	 				 <Course key={course.id} courseProp={course} />
	 			   )


	 	}else{
	 			return null
	 	}
	 })

	 console.log(courses)
	//  why course? it's the parameter of the map
	 const coursesDashboard = coursesData.map(course=>{
		console.log(course)
		return (
				<tr key={course.id}>
					<td>{course.name}</td>
					<td>{course.price}</td>
					<td>{course.onOffer ? "active" : "inactive"}</td>
					<td>{course.startDate}</td>
					<td>{course.endDate}</td>
					<td>
						<Button variant="warning" className="mr-3" >Delete</Button>
	 				 	<Button variant="danger" className="ml-1" >Edit</Button>
					</td>
				</tr>	
			)
	 	})

	return(	    
		    user.isAdmin
		    ?
		    <>
			<h1 className="text-center">Courses Dashboard</h1>
			
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Status</th>
						<th>Start Date</th>
						<th>End Date</th>	
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{coursesDashboard}
				</tbody>

			</Table>
			</>
			:
			<>
			<h1 className="text-center">Courses Page</h1>
			{courses}
			</>		
		
		)
}

