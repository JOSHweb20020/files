import React, { useState, createContext,useReducer } from 'react'
import casual2 from '../images/casual2.jfif'
import crop3 from '../images/crop3.jfif'
import crop5 from '../images/crop5.jfif'
import crop1 from '../images/crop1.jfif'
import AppReducer from './AppReducer'


const initialState = {
    fashionItems:[
        {
            id:1,
            image:casual2,
            name:"Multistriped gown",
            category:"Female gowns",
            price:30
            
        },
        {
            id:2,
            image:crop5,
            name:"Multistriped gown",
            category:"Female gowns",
            price:30

        },
        {
            id:3,
            image:crop1,
            name:"plain gown",
            category:"casual gowns",
            price:100
            
        },
        {
            id:4,
            image:crop3,
            name:"Multistriped gown",
            category:"Female gowns",
            price:30
            
        },
        {
            id:5,
            image:crop1,
            name:"Multistriped gown",
            category:"Female gowns",
            price:30
            
        },
    ]
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {
   
  
    const [state, dispatch] = useReducer(AppReducer,initialState)

    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) =>{
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if(ProductExist){
            setCartItems(cartItems.map((item) => item.id === product.id ?
           {...ProductExist, quantity: ProductExist.quantity + 1}:item )
           );
        } else{
            setCartItems([...cartItems,{...product,quantity:1}])
        }
    }

    function addProduct(fashionItems){
        dispatch({
            type:'ADD_PRODUCT',
            payload:fashionItems
        })
    }

    function deleteProduct(id){
        dispatch({
            type:'DELETE_PRODUCT',
            payload: id
        })
    }

    
    return (
        <GlobalContext.Provider
          value={{
            fashionItems:state.fashionItems,
            handleAddProduct,
            addProduct,
            deleteProduct,
            cartItems,
          }}>
            {children}
          </GlobalContext.Provider>
    )
}