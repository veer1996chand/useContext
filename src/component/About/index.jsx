import React,{ useContext } from 'react'
import {UserContext} from '../../UserContext'

const About=()=>{
    const {value, setValue} = useContext(UserContext)
    return<div>
        <h1>About Us</h1>
        <span>{value}</span>
    </div>
}

export default About