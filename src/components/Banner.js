import React from 'react'
import {Jumbotron, Button, Row, Col} from 'react-bootstrap'

import {Link} from 'react-router-dom'
//destructure the props object ad get only the property you need.
export default function Banner({dataProp}){
	console.log(dataProp)

	//destructure dataProps to get only its properties
	const {title,description,motto,label,destination} = dataProp

	console.log(title)
	console.log(description)
	console.log(motto)

	return (
			<>
				<Row>
					<Col>
						<Jumbotron>
							<h1>{title}</h1>
							<p>{description}</p>
							<p>{motto}</p>
							<Link to={destination}>{label}</Link>
							
						</Jumbotron>
					</Col>
				</Row>
			</>

			)
}