import React,{useState,useEffect,useContext} from 'react'
import { Input,Stack,Button } from '@chakra-ui/react'
import Doc from '../assets/doc2.png'
import { Values } from '../Context/Context'
import axios from 'axios'
const Main = ({Children}) => {
  const [age,setage]=useState()
  const[data,setdata]=useState()


  const perf= async()=>{
    await axios.post('http://127.0.0.1:5000/get',{'name':[age,1,2,2,8,1,8,8,1300]}).then((res)=>{
      console.log(res.data)
      setdata(res.data)
     }).catch((err)=>{
      console.log(err)
     })
  }
  return (
    <div className='layout'>
        <div className='image'>
          <img src={Doc} alt=""  className='icon'/>
          <h1 className='txt'>Heart Disease Prediction</h1>
        </div>
        <div className='form'>
           <div className='heading'>
             <h1 className='htxt'>Welcome To Heart Disease Predictor</h1><br /> 
             <p className='htxt-2'>fill in the forms to know if  you have a heart disease</p>
           </div>
           <div className='labels'>
            <Stack spacing={3}>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <Button colorScheme='teal' width={100} size='sm' mb={123}>
                   submit
                </Button>
             </Stack>
           </div>
        </div>
    </div>
  )
}

export default Main