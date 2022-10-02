import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Cart = () => {
  const {cartItems} = useContext(GlobalContext)
  return (
    <div className='mt-40  '>
      <div className=' '>
          <h2>CART ITEMS</h2>
      </div>

    {cartItems.length === 0 && <h1 className='text-4xl  font-semibold'>NO ITEM TO DISPLAY</h1>}
     <div className='my-5 bg-lime-300 border-2 border-black flex flex-col'>
       {cartItems.map((item) => (
         <div key={item.id} className='  flex justify-evenly border-b-2 border-black p-3  mx-20 '>
           <img className='cart-item-image'
             src={item.image} 
             alt={item.name}
             />
              <div className='flex  items-center'>
              <button className=''></button>
             </div>
             <div className='flex  items-center'>
              <h2 className='border-2 text-centerrounded-2xl border-black p-3 px-5 mx-6'>3</h2>
              <h2 className='border-2 text-center rounded-2xl border-black p-3 px-5'>{item.price}</h2>
             </div>
         </div>
        
       ))}
     </div> 
    </div>
  )
}

export default Cart