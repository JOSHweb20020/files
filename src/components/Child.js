import Cart from './Cart'
import Products from './Products' 
import {Routes,Route} from 'react-router-dom'


const Child = ({handleAddProduct, fashionItems, cartItems}) => {
  return (
    <div className='w-8/12'>
      <Routes>
        <Route path='/cart' exact element={<Cart  cartItems={cartItems}/>}/>
        <Route path='/' exact element={<Products  cartItems={cartItems}/>}/>
      </Routes>
    </div>
  )
}

export default Child