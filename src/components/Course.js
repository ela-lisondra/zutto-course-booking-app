import React,{useState, useEffect} from 'react'

import {Card, Row, Col, Button} from 'react-bootstrap'

export default function Course({courseProp}){
	console.log(courseProp)

	const {name,description,price} = courseProp

	// useState syntax
	const [count,setCount] = useState(0)

	const[seats, setSeats] = useState(30)

	const [isActive, setIsActive] = useState(true)

	useEffect(()=> {

		if(seats === 0) {
			setIsActive(false)
		}
	},[seats])


	function Enroll(){

		setCount(count + 1)
		setSeats(seats - 1)
	}

	console.log('I have re-rendered the component.')


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

								<Card.Text>
									Enrollees: {
										count >= 30
										? "This Class Is Full"
										: count

									}
								</Card.Text>

								<Card.Text>
									Available Seats: {
										seats <= 0
										? "No more seats available."
										: seats 
									}
								</Card.Text>

							</Card.Body>
							{
								isActive
								?
								<Button variant="primary" onClick={Enroll}>Enroll</Button>
								:
								<Button variant="primary" disabled>Enroll</Button>
							}
						</Card>
					</Col>
				</Row>
			</>

			)
}