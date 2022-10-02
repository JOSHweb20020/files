import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import Slider from './slider/slider'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBatteryFull} from '@fortawesome/free-solid-svg-icons/faBatteryFull'
import {faVanShuttle} from '@fortawesome/free-solid-svg-icons/faVanShuttle'
import { GlobalContext } from '../context/GlobalContext'


const Products = () => {
    
    const {fashionItems, handleAddProduct} = useContext(GlobalContext)
    const [allCategories, setAllCategories] = useState(false)
    const [gadgets,setGadgets] = useState(false)
    const [footwears,setFootwears] = useState(false)
    const [fashion,setFashion] = useState(false)
 

    function getCategories(){
        setAllCategories(true);
        setGadgets(false)
        setFootwears(false)
        setFashion(false)
    }
    function getGadgets(){
        setAllCategories(false);
        setGadgets(true)
        setFootwears(false)
        setFashion(false)
    }
    function getFashion(){
        setAllCategories(false);
        setGadgets(false)
        setFootwears(false)
        setFashion(true)
    }
    function getFootwear(){
        setAllCategories(false);
        setGadgets(false)
        setFootwears(true)
        setFashion(false)
    }


  return (
   <div className='mt-40 '>
   <div className='mb-10 px-20 flex items-center justify-center'>
    <div className='w-full h-96 bg-white p-2'>
        <Slider/>

    </div>
   </div>


    <div className=' flex flex-row rounded-3xl p-4 px-4 justify-evenly  mr-4 shadow-sm shadow-lime-200 bg-lime-300 text-black font-semibold'>
        <Link to='/'>
            <div className='flex justify-center '>
                <div className='text-black hover:text-white rounded p-2'>
                    
                   <h3><FontAwesomeIcon icon={faBatteryFull}/>Monday Promo</h3>
                  
                </div>
            </div>
        </Link>
        <Link to='/'>
            <div className='flex justify-center'>
                <div className='text-black hover:text-white  rounded p-2'>
                   <h3><FontAwesomeIcon icon={faVanShuttle}/>Free dispatch</h3>
                   <p></p>
                </div>
            </div>
        </Link>
        <Link to='/'>
            <div className='flex justify-center'>
                <div className='text-black hover:text-white rounded p-2'>
                   <h3>Friday Bangers</h3>
                   <p></p>
                </div>
            </div>
        </Link>
        <Link to='/'>
            <div className='flex justify-center'>
                <div className='text-black hover:text-white rounded p-2'>
                   <h3>SuperSales Sunday</h3>
                   <p></p>
                </div>
            </div>
        </Link>
        

        
    </div>

    <div className='text-center my-10'>
        <h1 className="text-2xl font-semibold mb-4 ">Why Buy From Us?</h1>
        <p className='text-slate-500'>Here at Kokashi we offer everything related to wears and gadgets <br/>
         quality at convenient prices. 
         We found out 60% of the World population 
         have eithier non quality wears or gadgets due to its cost. </p>
    </div>


     <div className='flex flex-wrap justify-center items-center font-semibold'>
        <button className='px-3 my-4  p-3 bg-lime-300 mr-2 rounded-xl hover:bg-white border-2 border-lime-700 text-black' onClick={getCategories}>ALL CATEGORIES</button>
        <button className='px-3 my-4  p-3 bg-lime-300 mr-2 rounded-xl hover:bg-white border-2 border-lime-700 text-black' onClick={getGadgets}>GADGETS</button>
        <button className='px-3 my-4  p-3 bg-lime-300 mr-2 rounded-xl hover:bg-white border-2 border-lime-700 text-black' onClick={getFashion}>FASHION</button>
        <button className='px-3 my-4  p-3 bg-lime-300 mr-2 rounded-xl hover:bg-white border-2 border-lime-700 text-black' onClick={getFootwear}>FOOTWEARS</button>
     </div>
    <div className=' flex flex-wrap mt-10 justify-center items-center '>
    {
        fashion && (
            fashionItems.map((fashionItem) => (
                <div className='' key={fashionItem.id}>
                    <div className='relative shadow-xl shadow-gray-300  rounded-2xl w-60 h-80 my-2 mx-1 text-center '>
                        <img src={fashionItem.image } className=' rounded-2xl h-full w-full hover:opacity-70'/>
                        <div className='flex absolute bottom-10 items-center '>
                            <button className='px-2 rounded-xl p-1 bg-black mx-2 text-white'>More-details</button>
                           <Link to='/Cart'>
                           <button onClick={() => handleAddProduct(fashionItem)} className='px-2 p-1 rounded-xl bg-black mx-2 text-white'>BUY-NOw</button>
                           </Link>

                        </div>
                    </div>
                </div>
            ))
        )
     }
     {
        gadgets && (
            <div className=''>
                GADGETS
            </div>
        )
     }
      {
       allCategories && (
            <div className=''>
               allCategories
            </div>
        )
     }
      {
      footwears && (
            <div className=''>
              footwears
            </div>
        )
     }
     
    </div>

   <>
    <h2 className='text-center text-3xl my-10 shadow-xl mx-3 shadow-lime-300 font-semibold'>RELATED VIDEO ADVERTS</h2>
   <div className='flex justify-center'>
        <div className='mr-5'>
            wear-video
        </div>
        <div className=''>
            Footwear-video
        </div>
    </div>
    <div className='flex justify-evenly my-8 '>
        <div className='mr-5'>
            wear 1
        </div>
        <div className=''>
            gadgets
        </div>
        <div className=''>
            footwear 1
        </div>
        <div className=''>
            caps 1
        </div>
        <div className=''>
            jewelries
        </div>
    </div>
   </>
    </div>
  )
}

export default Products