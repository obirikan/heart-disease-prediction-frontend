import React from 'react'
import Ps from '../Components/assets/1.jpg'
const Content = () => {
  return (
    <div className='contentcomponent'>
        <div>
          <div className='ctnheader'> 
            <div className='child1'>image of user</div>
            <div className='child2'>
              <p>name of person {''}<span>subscribed</span></p>
              <p>time ago</p>
            </div>
          </div>
          <div className='text'><p>lorem30</p></div>
           <div>
            <img src={Ps} alt="" className='psimg'/>
           </div>
           <div>
             <div className='ctnbtn'>
               <p>icon1</p>
               <p>icon2</p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Content