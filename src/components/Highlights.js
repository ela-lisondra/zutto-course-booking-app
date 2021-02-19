import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'

export default function Highlights(){

	return (

		<Row>
			<Col xs={12} md={4}>
				<Card className="cardHighlight">
					<Card.Body>
						<Card.Title>
							<h2>Learn From Home</h2>
						</Card.Title>
						<Card.Text>
							lorem	ipsum sojfosjvksdnvisejpfjaepnvfa;pednp;enpankidven fjoiefj jfepsj fpje pojf ejfposjefo sopef jopej fpoj fpj pojf
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight">
					<Card.Body>
						<Card.Title>
							<h2>Study Now Pay Later</h2>
						</Card.Title>
						<Card.Text>
							lorem	ipsum sojfosjvksdnvisejpfjaepnvfa;pednp;enpankidven fjoiefj jfepsj fpje pojf ejfposjefo sopef jopej fpoj fpj pojf
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight">
					<Card.Body>
						<Card.Title>
							<h2>Be Part of the Community</h2>
						</Card.Title>
						<Card.Text>
							lorem	ipsum sojfosjvksdnvisejpfjaepnvfa;pednp;enpankidven fjoiefj jfepsj fpje pojf ejfposjefo sopef jopej fpoj fpj pojf
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>

		)

}