import React,{useState, useEffect, useContext} from 'react'
import Banner from '../components/Banner'
import {Form, Button, Jumbotron} from 'react-bootstrap'
import Swal from 'sweetalert2'
import userContext from '../userContext'
import {Link} from 'react-router-dom'

export default function CreateCourse(){

    const {user} = useContext(userContext)

    //STATES
    const [courseName, setCourseName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const [isActive, setIsActive] = useState(true)

    //CHECK USER'S INPUT AND SET THE BUTTON AS DISABLED IF THE INPUTS ARE NOT FILLED
    useEffect(()=>{
        if(courseName !== '' && description !== '' && price !== '' && startDate !== '' && endDate !== '') {

            setIsActive(true)
        } else {

            setIsActive(false)
        }

    },[courseName, description, price, startDate, endDate])
    //IF THE ABOVE STATE VARS BUT ISACTIVE IS NOT INCLUDED. DON'T INCLUDE USEEFFECT IN DEPENDENCY
    console.log(isActive)

    function addCourse(e){

        e.preventDefault()

        Swal.fire({

            icon:"success",
            title:"Course Added.",
            text: `The ${courseName} has been added. It has a price of ${price} and will start on ${startDate} and end on ${endDate}.`
        })
        

        setCourseName("")
        setDescription("")
        setPrice(0)
        setStartDate("")
        setEndDate("")
    }

    let data = {

        title: "Error 403",
        description: "You don't have enough permission to view this page.",
        motto: "Zuitt Booking System",
        destination: "/",
        label: "Back to Home"

    }

    return (

            user.isAdmin
            ?

            <>
                <h1>This is the Create a Course Page</h1>
                <Form onSubmit={e => addCourse(e)}>
                    <Form.Group controlId="courseName">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Course Name" value={courseName} onChange={e => setCourseName(e.target.value)} required/> 
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" value={description} onChange={e => setDescription(e.target.value)} required/> 
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" value={price} onChange={e => setPrice(e.target.value)} required/> 
                    </Form.Group>

                    <Form.Group controlId="startDate">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required/> 
                    </Form.Group>

                    <Form.Group controlId="endDate">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required/> 
                    </Form.Group>
                    {
                        isActive
                        ?
                        <Button type="submit" variant="primary">Add Course</Button>
                        :
                        <Button type="submit" variant="primary" disabled>Submit</Button>
                    }
                </Form>
            </>
            :
            <Banner dataProp={data} />
    )
}
