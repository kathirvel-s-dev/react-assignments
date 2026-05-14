import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Prac from './Prac.jsx'
import ApiFetch from './Compos/ApiFetch.jsx'
import NewDone from './Compos/NewDone.jsx'
import ProductSite from './Compos/ProductSite.jsx'

createRoot(document.getElementById('root')).render(
  // <App/>
  //  <Prac/>
  // <ApiFetch/>
  // <NewDone/>
  <ProductSite/>
)
