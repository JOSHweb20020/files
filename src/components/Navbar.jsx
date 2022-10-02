import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faBars} from '@fortawesome/free-solid-svg-icons/faBars'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart'
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons/faShoppingBag' 


const Navbar = ({toggleNav}) => {
  return (
    <div className=''>
    <div className='w-full flex flex-row justify-between pb-3 font-semibold border-b-2 items-center border-black'>
      <div className=' flex flex-row items-center '>
        <button onClick={() => toggleNav()}>
         <FontAwesomeIcon className='text-green-600' icon={faBars}/>
        </button>
        <p className=' ml-3 mr-10 text-2xl font-sanserif'>KOKASHI</p>
        <Link className='p-1 px-3 border-2 border-lime-300 hover:bg-lime-500 rounded-2xl' to="/">About</Link>
      </div>

      <form className=' hidden md:flex flex-row items-center border-2  border-lime-300'>
      <button className='p-1 px-2 rounded bg-lime-300 '>CATEGORY</button>
      <input  type='text' placholder='Search-Products'/>
      <button className='p-1 px-2 rounded bg-lime-300 '>SEARCH</button>
      </form>

      <div className='flex flex-row '>
        <Link className='mr-2 p-1 px-3 border-2 border-lime-300 hover:bg-lime-500 rounded-2xl' to='/'>FaceBook</Link>
        <Link className='mr-2 p-1 px-3 border-2 border-lime-300 hover:bg-lime-500 rounded-2xl' to='/'>Whatsapp</Link>
        <Link className='mr-2 p-1 px-3 border-2 border-lime-300 hover:bg-lime-500 rounded-2xl' to='/'>FaceBook</Link>
      </div>
    </div>



    <div className='flex mt-1 justify-between bg-cyan-800 p-2 px-4 text-white text-md font-semibold rounded items-center'>
      <div className=' flex flex-row justify-between'>
      <Link className='flex mr-20 flex-row items-center justify-center' to=''><FontAwesomeIcon className='w-8 h-8 text-yellow' Icon ={faShoppingBag}/>ALL CATEGORIES</Link>
      <Link className='flex mr-20 flex-row items-center justify-center'  to=''>FOOTWEARS</Link>
      <Link className='flex mr-20 flex-row items-center justify-center' to=''>STYLE UPDATE</Link>
      </div>
      <div className=' flex flex-row justify-evenly'>
       <Link to=''><FontAwesomeIcon icon ={faPhone}/><h2>09064981936</h2></Link>
      <Link to=''><FontAwesomeIcon icon={faShoppingCart}/><h2>Cart</h2></Link>
      </div>
      
    </div>
    </div>
  )
}

export default Navbar