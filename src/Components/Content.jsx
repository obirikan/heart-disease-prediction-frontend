import React from 'react'
import d from '../assets/d.png'
import { motion } from "framer-motion"
import { Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
const Content = () => {
  const navigate=useNavigate()
  return (
  <div  className='anim'>
          <motion.img src={d} alt=""
             animate={{ y: 90 }}
             transition={{ type: "spring", stiffness: 50 ,delay:1}}
          />
          <h1>Heart Disease Predictor</h1>
          <Button colorScheme='red' m={30} width={100} 
          onClick={()=>navigate('/main')}
          >Start</Button>
  </div>
  )
}

export default Content