import React from 'react'
import Nav from './Nav'
import Feed from './Feed'
import Content from './Content'
const Main = ({Children}) => {
console.log(Children)
  return (
    <div className='layout'>
      {Children}
    </div>
  )
}

export default Main