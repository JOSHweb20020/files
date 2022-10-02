import React,{useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Child from './components/Child'
import Navbar from './components/Navbar'
import Others from './components/Others'
const App = () => {
  
    const [activeMenu, setActiveMenu] = useState(true)

    const toggleNav = () => {
        setActiveMenu((prevActiveMenu) => !prevActiveMenu)
    }
  return (
    <div className=''>
        <BrowserRouter>
        <div className='flex flex-row justify-between bg-slate-300'>
           {
            activeMenu ? (
                <div className='flex flex-row '>
                    <div className='  fixed w-72 px-4 h-screen rounded-r-3xl bg-lime-500 text-black pt-5 border-l-2 border-black '>
                        <Sidebar toggleNav={toggleNav}/>
                    </div>
                    <div className='ml-72 px-4 flex flex-col w-full'>
                        <div className=' '>
                            <Navbar/>
                        </div>
                        <div className='flex flex-row justify-evenly items-start'>
                            <Child />
                            <Others/>
                        </div>
                    </div>
                </div>
            ):(
                <div className=''>
                    
                    <div className=' w-full flex flex-col'>
                        <div className='mt-5 fixed px-4 w-full'>
                            <Navbar toggleNav={toggleNav}/>
                        </div>
                        <div className='flex flex-row justify-evenly items-start h-full'>
                            <Child  />
                            <Others/>
                        </div>
                    </div>

                </div>
            )
           }

        </div>
        </BrowserRouter>
    </div>
  )
}

export default App