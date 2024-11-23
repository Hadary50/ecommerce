import React, { useContext } from 'react'
import { CategoryContext } from '../../Context/CartContext/CategoryContext'

export default function Category() {
  let {subCat}=useContext(CategoryContext)
  console.log(subCat);
  
  return <><div className="container mt-5 p-5">
    <div className="row  justify-content-between g-1">
      {subCat?.data.products.map((prod)=><div key={prod.id} className='col-md-4 pointer card card-prods'>
        <img src={prod.thumbnail} className='w-100' alt="" />
        <hr />
          <h3 className='text-danger'>{prod.title}</h3>
        <div className='d-flex justify-content-between'>
        <span className='fw-bolder text-center  text-danger'>$ {prod.price}</span>
        </div>
      </div>)}
    </div>
  </div>
  </>
}
