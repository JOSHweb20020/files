import React, { useState } from 'react'
import {Link,Routes,NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown'

const Sidebar = ({toggleNav}) => {
  const [dropDown, setDropDown] = useState(false)

  return (
    <div className='flex flex-col text-black ' >
      <div className='flex justify-between text-xl mb-10 '>
        <h5>MENU</h5>
        <button onClick ={() => 
          toggleNav()
          
          }className=' border-2 border-white rounded-xl text-md bg-white text-black font-semibold w-8 h-8'>
          <FontAwesomeIcon icon = {faTimes}/>
        </button>
      </div>
      <Link className='mb-8 bg-lime-300 pl-3 py-1 rounded hover:mt-1' to='/'>Home</Link>
      <Link className='mb-8 bg-lime-300 pl-3 py-1 rounded hover:mt-1' to='/'>Feedback</Link>
      <Link className='mb-8 bg-lime-300 pl-3 py-1 rounded hover:mt-1' to='/'>Filter</Link>
      <Link  className='mb-8 bg-lime-300 pl-3 py-1 rounded hover:mt-1' to='/'>About</Link>
      <Link  className='mb-2 bg-lime-300 px-3 py-1 rounded hover:mt-1 flex flex-row items-center justify-between' to='/'>Categories<FontAwesomeIcon icon={faArrowAltCircleDown} onClick={() => setDropDown((prevDropDown) => !prevDropDown )}/></Link>
      {
        dropDown &&(
          <div className='ml-6 bg-white px-2 py-7 rounded-xl mb-8 flex flex-col z-10 shadow-md shadow-lime'>
            <NavLink className='mb-4 font-semibold border-b-2 border-lime-800 ml-4  py-2 ' to='/fashion'>Fashion</NavLink>
            <NavLink className='mb-4 font-semibold border-b-2 border-lime-800 ml-4  py-2 ' to='/fashion'>Gadgets</NavLink>
            <NavLink className='mb-4 font-semibold border-b-2 border-lime-800 ml-4  py-2 ' to='/fashion'>Footwears</NavLink>
          
           </div>
        )
      }
       
      <Link  className='mb-8 mt-4 bg-lime-300 pl-3 py-1 rounded hover:mt-1' to='/Contact-us'>Contact-us</Link>
    </div>
  )
}

export default Sidebar