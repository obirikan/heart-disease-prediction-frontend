import React,{useContext,useState} from 'react'
import Res from '../assets/res.png'
import {Values} from '../Context/Context'
const Feed = () => {
  const {name,result}=useContext(Values)
  return (
    <div className='feed'>
          <img src={Res} alt=""className='icon' />
          <h1 className='txtres'>{name}{result==='absence'?'You do not have a heart disease':'you have a heart disease'}</h1>
    </div>
  )
}

export default Feed