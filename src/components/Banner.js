import React from 'react'
import {Jumbotron, Button, Row, Col} from 'react-bootstrap'

export default function Banner(){

	return (
			<>
				<Row>
					<Col>
						<Jumbotron>
							<h1>Zuitt Coding Bootcamp</h1>
							<p>Opportunities for Everyone, Everywhere.</p>
							<Button variant="primary">Enroll Now!</Button>
						</Jumbotron>
					</Col>
				</Row>
			</>

			)
}