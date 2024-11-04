import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header';
import { CartContext } from './MainContext/Context';
import { toast, ToastContainer } from 'react-toastify';
  
export default function ProductListing() {     

    const params = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get(` https://dummyjson.com/products/category/${ params.name } `)
        .then((result) => {
            setProducts(result.data.products);
        });
      },[]);



    let {setCartItems, cartItems} = useContext(CartContext);

      const addtoCart = (data) => {

        var checkCartItems = cartItems.filter((v) => {
          if(v.id == data.id){
            return v;
          }
        })
        
        if(checkCartItems.length == 0){
          const productData = {
            id  : data.id,
            name  : data.title,
            price : data.price,
            image : data.thumbnail,
            brands : data.brand,
            qty : 1
          }

        //use spread operator because our state is declared as array in Context and this productData variable is in the object format
        //if we use spread operator there should be the previous data which is already in our cartItems named variable in state so we have to use that as a props from the Context

        const finalData = [productData, ...cartItems];

        setCartItems(finalData);
        } else{
          var checkCartItems = cartItems.map((v) => {
            if(v.id == data.id){
              v.qty++;
              return v;
            } else {
              return v;
            }
          })
          setCartItems(checkCartItems);
        }
        toast.success('Product Added Successfully !!')
      }
    
    return (
      <>
      <ToastContainer/>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.title}
                      src={product.thumbnail}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={ `/product-details/${ product.id }` }>
                          {product.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  </div>
                  <button className='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]' onClick={() => addtoCart(product)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </>
    )
  }
