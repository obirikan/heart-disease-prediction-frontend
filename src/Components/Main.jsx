import React,{useState,useEffect,useContext} from 'react'
import { Input,Stack,Button, Select  } from '@chakra-ui/react'
import Doc from '../assets/doc2.png'
import { Values } from '../Context/Context'
import axios from 'axios'

const Main = () => {
const [name,setname]=useState('')
const [age,setage]=useState('')
const [sex,setsex]=useState(0)
const [bp,setbp]=useState('')
const [cpt,setcpt]=useState(1)
const [cho,setcho]=useState('')
const [fbs,setfbs]=useState(0)
const [ekg,setekg]=useState(0)
const [max,setmax]=useState('')


const send=()=>{
  if(name===''||age===''||bp===''||cho===''||max===''){
    alert('all fileds required')
  }
  else{
    console.log(`name:${name},sex:${sex},age:${age},blood:${bp},cpt:${cpt},cholest:${cho},fbs:${fbs},ekg:${ekg},max:${max}`)
  }

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
                   placeholder='kelvin' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   onChange={(e)=>setname(e.target.value)}
                   />
                </div>
                <div>
                  <p>Age</p>
                  <Input 
                   className='btn'
                   placeholder='20' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   onChange={(e)=>setage(e.target.value)}
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
                    onChange={(e)=>setsex(e.target.value)}
                    value={0}
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
                    onChange={(e)=>setcpt(e.target.value)}
                    value={1}
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
                   placeholder='eg.100' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   onChange={(e)=>setbp(e.target.value)}
                   type='number'
                   />
                </div>
                <div>
                  <p>Cholestrol</p>
                  <Input 
                   className='btn'
                   placeholder='eg.100' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   type='number'
                   onChange={(e)=>setcho(e.target.value)}
                   />
                </div>
                <div>
                  <p>FBS over 120</p>
                  <Select
                    className='btn'
                    size='sm' 
                    width={300}
                    onChange={(e)=>setfbs(e.target.value)}
                    value={0}
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
                    onChange={(e)=>setekg(e.target.value)}
                    value={0}
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
                   placeholder='eg.100' 
                   size='sm' 
                   htmlSize={{ base: '90px', md: '90px', lg: '90px' }} 
                   width='auto btn' 
                   type='number'
                   onChange={(e)=>setmax(e.target.value)}
                   />
                </div>
                <Button 
                 colorScheme='teal'
                 width={100} size='sm'
                  mb={123}
                  onClick={send}
                  >
                   submit
                </Button>
             </Stack>
           </div>
        </div>
    </div>
  )
}

export default Main

// const perf= async()=>{
//   await axios.post('http://127.0.0.1:5000/get',{'name':[age,1,2,2,8,1,8,8,1300]}).then((res)=>{
//     console.log(res.data)
//     setdata(res.data)
//    }).catch((err)=>{
//     console.log(err)
//    })
// }