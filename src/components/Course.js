import React from 'react'

import {Card, Row, Col} from 'react-bootstrap'

export default function Course({courseProp}){
	console.log(courseProp)

	const {name,description,price} = courseProp

	console.log(name)
	console.log(description)
	console.log(price)

	return (
			<>
				<Row>
					<Col>
						<Card className="Course">
							<Card.Body>
								<Card.Title>
									<h2>{name}</h2>
								</Card.Title>
								<Card.Text>
									{description}
								</Card.Text>

								<Card.Text>
									{price}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</>

			)
}