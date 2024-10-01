import React from 'react'
import { Link } from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'
import { removeFromWishList } from '../Redux/slices/wishSlice'
import { addToCart } from '../Redux/slices/cartSlice'

function Wish() {

  const {items}=useSelector((state)=>state.wishReducer)
  console.log(items);
   const dispatch=useDispatch()

   const handleAddToCart=(data)=>{
    console.log(data);
    dispatch(addToCart({...data}))
    dispatch(removeFromWishList(data.id))
   }
  return (
    <>
    <h2 className='my-3 text-center'>Wishlist</h2>
    <div className='row container-fluid p-3'>
    {
      items.length>0?
      items?.map(wish=>(
<div className='col-3'> 
      <div className="card h-100">            
    <img className="card-img-top" src={wish.thumbnail} alt="..." />
   
    <div className="card-body p-4">
        <div className="text-center">

            <h5 className="fw-bolder">{wish.title}</h5>
           
            ${wish.price}
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
        {/* <Link to={`/view/${wish.id}`} className='btn btn-outline-info'>Veiw more</Link> */}
        <button className='btn' onClick={()=>{dispatch(removeFromWishList(wish.id))}}>
        <i className="fa-solid fa-heart-circle-xmark" style={{color: "#d4111b",}} />
        </button>
        <button className='btn ms-auto' onClick={()=>{handleAddToCart(wish)}}>
        <i className="fa-solid fa-cart-plus" style={{color: "#50d336",}} />
        </button>
    </div>
</div>
</div>
      ))
      :
      <h3 className='text-warning text-center'>No items added yet</h3>
    }

      
</div> 
</>
  )
}

export default Wish