import React from 'react'

import Banner from '../components/Banner'
export default function ErrorPage(){

        let data = {
            title: "Error 404",
            description: "Unfortunately, the page you're looking for cannot be found.",
            motto: "Booking knowledge everywhere.",
            detination: "/",
            label: "Back to the Home Page"
        }

   // we use dataProp to pass the data to Banner
    return(
        <>
            <Banner dataProp={data} />
        </>
    )
}
