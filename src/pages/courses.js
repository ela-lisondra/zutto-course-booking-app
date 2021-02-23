import React from 'react'
import coursesData from '../data/courses'

// components
import Course from '../components/Course'

export default function Courses(){

	// console.log(coursesData)
	const courses = coursesData.map(course => {

		return (

				<Course 
				key={course.id}
				courseProp={course}/>

			)
	})

	console.log(courses)
	
	return (
		<>
			<h1>Hello From Courses Page</h1>
			{courses}
		</>

		)

}