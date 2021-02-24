import React, {useContext, useEffect} from 'react'
import UserContext from '../userContext'
import {Redirect} from 'react-router-dom'

export default function Logout(){

        const {unsetUser} = useContext(UserContext)
        useEffect(()=>{

            unsetUser()
        })

    return (

        <Redirect to="/login" />
    )

}