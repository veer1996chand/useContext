import React,{useContext} from 'react'
import {UserContext} from '../../UserContext'

const Home=()=>{
    const{value, setValue} = useContext(UserContext)
    return<div> 
            <h1>Home</h1>
            <span>{value}</span>
            <button onClick={()=>{setValue('heyy')}} >change Name</button>
        </div>
}

export default Home