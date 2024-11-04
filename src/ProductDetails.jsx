import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import Header from './Header';
  
  export default function ProductDetails() {

    const params = useParams();

    const [details,setDetails] = useState({});

    useEffect(() => {

        axios.get(` https://dummyjson.com/products/${ params.id }`)
        .then((result) => {
            setDetails(result.data);
        });
      },[]);

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product Details</h2>
                        <div className="mt-6 flex flex-col items-center">
                            <div className=" rounded-[9px_9px_0px_0px] bg-[#36765E] duration-[0.5s] hover:translate-y-[-20px] ">
                                <div className="aspect-h-1 aspect-w-1 w-[350px] rounded-lg bg-gray-200 lg:aspect-none lg:h-[250px] mx-auto hover:">
                                    <img
                                        alt={details.title}
                                        src={details.thumbnail}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div className='flex justify-between p-4 hover:order1'>
                                    <div className=" text-start mt-2">
                                        <h3 className="font-bold text-[20px] text-[#80c1fd] w-[200px]">{details.title}</h3>
                                        <p className="mt-3 text-md text-black">{details.category}</p>
                                        {/* <p className="mt-1 text-sm text-gray-900">{details.brand}</p> */}
                                    </div>

                                    <div className="">
                                        <p className="text-md text-end font-medium text-[#FFA500]">${details.price}</p>
                                        {/* <p className="mt-1 text-md text-black">{details.rating}</p> */}


                                        <div className=" mt-2">
                                            <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <IoIosStar
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    details.rating > rating ? 'text-[#f4ff56]' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0',
                                                )}
                                                />
                                            ))}
                                            </div>
                                            <p className="sr-only">{details.rating} out of 5 stars</p>
                                            <a href="#" className=" text-sm font-medium text-gray-900 hover:text-[#c1c587]">
                                            {details.rating} reviews
                                            </a>
                                        </div>


                                    </div>
                                </div>
                                <div className='lg:max-w-[350px] mt-2 px-3 pb-3'>
                                    <p className="text-justify text-[18px] font-medium text-[#ffffff]">{details.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
