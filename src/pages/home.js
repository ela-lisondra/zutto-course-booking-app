import React from 'react'
import Banner from './../components/Banner'
import Highlights from './../components/Highlights'
import Course from './../components/Course'

export default function home(){


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

let course1 = {

	name: "HTML",
	description: "lorem	ipsum sojfosjvksdnvisejpfjaepnvfa;pednp;enpankidven fjoiefj jfepsj fpje pojf ejfposjefo sopef jopej fpoj fpj pojf",
	price: "P 1000"
}

let course2 = {

	name: "CSS",
	description: "lorem	ipsum sojfosjvksdnvisejpfjaepnvfa;pednp;enpankidven fjoiefj jfepsj fpje pojf ejfposjefo sopef jopej fpoj fpj pojf",
	price: "P 2000"
}

let course3 = {

	name: "JS",
	description: "lorem	ipsum sojfosjvksdnvisejpfjaepnvfa;pednp;enpankidven fjoiefj jfepsj fpje pojf ejfposjefo sopef jopej fpoj fpj pojf",
	price: "P 3000"
}

  return (
    <>
      <Banner dataProp={data2}/>
      <Highlights />
      <Course courseProp={course1}/>
      <Course courseProp={course2}/>
      <Course courseProp={course3}/>
    </>
    )

}

