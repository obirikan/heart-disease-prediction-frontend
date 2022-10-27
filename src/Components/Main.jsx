import React,{useState,useEffect,useContext} from 'react'
import { Input,Stack,Button, Select  } from '@chakra-ui/react'
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
             <h1 className='htxt'>Heart Disease Prediction</h1>
             <p className='htxt-2'>fill in the forms to know if  you have a heart disease</p>
           </div>
           <div className='labels'>
            <Stack spacing={3}>
                <div>
                  <p>Name</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>Age</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn'
                   type='number'
                   />
                </div>
                <div>
                  <p>Sex</p>
                  <Select
                    className='btn'
                    size='sm' 
                    width={300}
                   >
                    <option value={1}>Male</option>
                    <option value={0}>female</option>
                  </Select>
                </div>
                <div>
                  <p>Chest Pain Type</p>
                  <Select
                    className='btn'
                    size='sm' 
                    width={300}
                   >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </Select>
                </div>
                <div>
                  <p>Blood Pressure</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>Cholestrol</p>
                  <Input 
                   className='btn'
                   placeholder='small size' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   />
                </div>
                <div>
                  <p>FBS over 120</p>
                  <Select
                    className='btn'
                    size='sm' 
                    width={300}
                   >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                  </Select>
                </div>
                <div>
                  <p>EKG result</p>
                  <Select
                    className='btn'
                    size='sm' 
                    width={300}
                   >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </Select>
                </div>
                <div>
                  <p>Max HR</p>
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