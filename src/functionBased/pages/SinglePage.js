import React from "react"
import {
  // rest of the elements/components imported remain same
  Outlet
} from 'react-router-dom';
import { useParams } from "react-router-dom"


const SinglePage = () => {
  console.log('Hii:', useParams())
  return <div>
      Hello from single page
      
    </div>
}
export default SinglePage
