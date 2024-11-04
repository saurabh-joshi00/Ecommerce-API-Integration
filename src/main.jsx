import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ProductListing from './ProductListing.jsx';
import ProductDetails from './ProductDetails.jsx';
import CommonRoute from './CommonRoute.jsx';
import Header from './Header.jsx';
import Context from './MainContext/Context.jsx';
import CartListing from './CartListing.jsx';


// Method(1) Client-Side Routing
// const router = createBrowserRouter([
//   //static components calling
//   {
//     path: '/',
//     element: <Home/>,
//   },
//   {
//     path: 'about-us',
//     element: <AboutUs/>,
//   },

//   //dynamic components calling
//   {
//     path: 'categories/:name?/:productName?',
//     element: <ProductListing/>,
//   },
//   {
//     path: 'product-details/:id?',
//     element: <ProductDetails/>,
//   },
// ]);




// Method(2.1) Nested Routing: is used like- when we have <Header/> & <Footer/> which are common components and we want to use them for multiple times (used for websites)
const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<CommonRoute />}>
          <Route path="/" element={<Home />}></Route>
        </Route>  

        <Route path="categories/:name" element={<CommonRoute />}>
          <Route path="/categories/:name" element={<ProductListing />}></Route>
        </Route>

        <Route path="product-details/:id">
          <Route path="/product-details/:id" element={<ProductDetails />}></Route>
        </Route>

        <Route path="cart" element={<CommonRoute />}>
          <Route path="/cart" element={<CartListing />}></Route>
        </Route> 

{/* Method(2.2) used for Nested Routing (especially for backend) */}
        <Route path='admin-panel'>
          <Route path='categories' element={<Home/>}>
            <Route path='add' element={<Home/>}></Route>
            <Route path='view' element={<Home/>}></Route>
            <Route path='update' element={<Home/>}></Route>
            <Route path='delete' element={<Home/>}></Route>
          </Route>

          <Route path='products'>
            <Route></Route>
          </Route>

          <Route path='product-details'>
            <Route></Route>
          </Route>
        </Route>
      </>
  )
)

createRoot(document.getElementById('root')).render(
//method used for API routing
  // <RouterProvider router={router} />

//method used for Context API routing--- by only calling the component
  <Context>
    <RouterProvider router={router} />
  </Context>
)
