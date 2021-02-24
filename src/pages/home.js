import React, {useContext} from 'react'
import Banner from './../components/Banner'
import Highlights from './../components/Highlights'
import Course from './../components/Course'
import UserContext from '../userContext'

export default function Home(){

  const {user,setUser} = useContext(UserContext)


  let data = {

      title: "Zuitt Coding Bootcamp",
      description: "A cost-efficient coding bootcamp.",
      motto: "Opportunities for Everyone. Everywhere."
  }


  let data2 = {

      title: "Zuitter Booking System",
      description: "A cost-efficient booking system.",
      motto: "Easy Breezy."
  }


    return (
      <>
        <Banner dataProp={data2}/>
        <Highlights />
        
      </>
      )

  }

