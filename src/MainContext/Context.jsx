import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

//Context API is used if we want to share data between components from child to parent or from parent to child--- which is lacking in Props concept where we can share data from parent to child only

//Conext variable is declared globally as Add to Cart functionality is used for multiple pages
let CartContext = createContext();

export default function Context({ children }) {
//there can be declared multiple states and functions
    let [cartItems, setCartItems] = useState([]);
    let [productItems, setProductItems] = useState([]);


    //we can declare any function either within the same component or in the main context file or can be shared as a props in another component where we want to use it but only when we want to use that function for multiple times or globally
    // const addtoCart = (data) => {
    //     const productData = {
    //       id  : data.id,
    //       name  : data.title,
    //       price : data.price,
    //       image : data.thumbnail,
    //       qty : 1
    //     }
        
    //     //use spread operator because our state is declared as array in Context and this productData variable is in the object format
    //     //if we use spread operator there should be the previous data which is already in our cartItems named variable in state so we have to use that as a props from the Context
    //     const finalData = [productData, ...cartItems];

    //     setCartItems(finalData);  

    //     toast.success('Product Added Successfully !!')

    //   }

//these multiple states and functions can shared within a single variable in the form of Props
    let contextData = {cartItems, setCartItems, productItems, setProductItems}

  return (
    <CartContext.Provider value={ contextData }>
        { children }
    </CartContext.Provider>
  )
}

export  { CartContext };
