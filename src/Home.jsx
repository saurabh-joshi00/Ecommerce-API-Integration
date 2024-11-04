import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Home() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    axios.get('https://dummyjson.com/products/categories')
    .then((result) => {
      setCategories(result.data);
    });
  },[]);

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-2">
            <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {categories.map((categories) => (
                <div key={categories.name} className="group relative pb-5">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={categories.name}
                      src='https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg'
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-2 text-sm text-gray-500">
                    <Link to={ `/categories/${ categories.slug }` }>
                      <span className="absolute inset-0" />
                      {categories.name}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
                    
