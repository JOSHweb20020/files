import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Others = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [ price , setPrice] = useState('');
  const[category, setCategory] = useState('')

  const { addProduct } = useContext(GlobalContext)
 

  const onSubmit = e => {
    e.preventDefault();
    const newProduct = {
      id:Math.floor(Math.random * 10000000000),
      image,
      name,
      category,
      price
    }
    addProduct(newProduct)
  }

  return (
    <div className=' mt-40 w-75  h-screen  p-5  pl-4 border-l-2 border-black flex flex-col  '>
      <h1 className='text-lg font-semibold mb-20'>Upload and Display Image Using ReactHooks</h1>

      <form onSubmit={onSubmit} className='border-2 border-black bg-green p-2 h-full  '>
        <label className='font-semibold text-md mt-5'>Product Name</label>
        <br/>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='ProductName'  className='mb-10 w-full bg-cyan-800 text-white p-2 rounded'/>
        <br/>
        <label className='font-semibold text-md'>Product Price</label>
        <br/>
        <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='ProductPrice'  className='w-full mb-10 bg-cyan-800 text-white p-2 rounded'/>
        <br/>
        <label className='font-semibold text-md'>Product Category</label>
        <br/>
        <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='ProductCategory'  className='w-full bg-cyan-800 text-white p-2 rounded'/>
        <br/>
        <label className='font-semibold text-md'>Cross-Checked</label><input type='checkbox' className=' mb-20 ml-3 '/>
      




    
     
      {image && (
        <div  className='flex flex-col'>
          <img alt='not found' 
          src={URL.createObjectURL(image)}
          className='w-60 h-40'/>
          
          <button onClick ={() => image(null)}>
            Remove
          </button>
          

         </div> 
      )}
      <br/>
      <input type='file' name='myImage' onChange={(event) => {
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
      }}
      />
      <button className='p-3 bg-slate-500'>ADD NEW PRODUCT</button>
      </form>
      
    </div>
  )
}

export default Others