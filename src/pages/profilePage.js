import React,{useState, useEffect, useContext} from 'react'
import userData from '../data/users'
import {Jumbotron} from 'react-bootstrap'
import userContext from '../userContext'
import {Link} from 'react-router-dom'
// import ErrorPage from './errorPage'

export default function ProfilePage(){

    const {user} = useContext(userContext)
    console.log(user)
	
	const email = localStorage.getItem('email')

	const match = userData.find(user=>{

		return (user.email===email)
	})

	console.log(match)


    return (

            user.isAdmin
            ?
        
            <Jumbotron>
            <h2>Hello Admin</h2>
            <Link to="/" className="mr-3">Back to Home</Link>
            <Link to="/courses/create">Create a Course</Link>
            </Jumbotron>
                    
    
            :
                <>
                    <h1>Profile</h1>
                    <Jumbotron>
                        <p>{match.firstName}</p>
                        <p>{match.lastName}</p>
                        <p>{match.mobileNo}</p>
                        <p>{match.email}</p>
                    </Jumbotron>
                </>

            
    )
}



// 	const {user} = useContext(UserContext)
// 	console.log(user)
	
// 	const email = localStorage.getItem('email')

// 	const match = userData.find(user=>{

// 		return (user.email===email)
// 	})

// 	console.log(match)

//  return(
//     		user.email
//     		?
//     		  	user.isAdmin
//     		  	?
//     		  		<Jumbotron>
//     		  			<h2>Hello Admin</h2>
//     		  			<Link to="/" className="mr-3">Back to Home</Link>
//     		  			<Link to="/courses/create">Create a Course</Link>
//     		  		</Jumbotron>
//     		    :

//     		     	<>
//     		     	<h1 className="text-center">Profile</h1>
//     		     	<Jumbotron>
//     		     		<h2 className="text-center"> {match.firstName} {match.lastName} </h2>
//     		     		<p className="text-center mr-3">{match.mobileNo}</p>
//     		     		<p className="text-center">{match.email}</p>
//     		     	</Jumbotron>
//     		     </>
//     		:
//     		<ErrorPage/>
//      )
//  }
