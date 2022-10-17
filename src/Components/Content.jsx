import React from 'react'
import Ps from '../Components/assets/1.jpg'
import P from '../Components/assets/6.JPG'
import M from '../Components/assets/3.jpg'
const Content = () => {
  return (
  <div className='contentcomponent'>
        <div>
          <div className='ctnheader'> 
            <div className='child1'><img src={P} alt="" className='ps1' /></div>
            <div className='child2'>
              <p>Tonny {''}<span>subscribed</span></p>
              <p className='ta'>1 hour ago</p>
            </div>
          </div>
          <div className='text'><p>RAISING CHAMPIONS EMPOWERING VISONS AND REACHING</p></div>
           <div>
            <img src={M} alt="" className='psimg'/>
            <div>
             <div className='ctnbtn'>
               <p>icon1</p>
               <p>icon2</p>
             </div>
           </div>
           </div>
        </div>
  </div>
  )
}

export default Content