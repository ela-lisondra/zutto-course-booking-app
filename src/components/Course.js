import React from 'react'

import {Card, Row, Col} from 'react-bootstrap'

export default function Course({dataProp}){
	console.log(dataProp)

	const {name,description,price} = dataProp

	console.log(name)
	console.log(description)
	console.log(price)

	return (
			<>
				<Row>
					<Col xs={12} md={4}>
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