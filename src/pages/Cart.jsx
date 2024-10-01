import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart,increaseQuantity,decreaseQuantity,checkout} from '../Redux/slices/cartSlice'


function Cart() {
  const {cart}=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  return (
    <>
    <div className='container-fluid p-4'>
      <h3>Cart summary</h3>
      <Row>
        <Col sm={12} md={8}>
          {
            cart?.length>0?
            <table className='table table-bordered border shadow border-4 border-dark'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cart?.map(item=>(
                  <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.thumbnail} alt=""  width={'250px'}/>
                </td>
                <td>{item.price}</td>
                <td>
                  <button className='btn' onClick={()=>{dispatch(increaseQuantity(item.id))}}>+</button>
                  <input type="text"  className='form-control w-25' value={item.quantity}/>
                  <button className='btn' onClick={()=>{dispatch(decreaseQuantity(item.id))}}>-</button>
                </td>
                <td>
                  <button className='btn' onClick={()=>{dispatch(removeFromCart(item.id))}}> 
                  <i className='fa-solid fa-trash' style={{color:'#ed0735'}}></i>
                  </button>
                </td>
              </tr>
                ))
              }
              
            </tbody>
          </table>
          :
          <h3 className="text-center text-w">No items Added Yet!!</h3>
          }
          
        </Col>
        <Col sm={12} md={4}>
          <div className='border shadow p-5 border-3'>
<h4>Total item:{cart?.length}</h4>
<h4> Total amount:{cart?.reduce((prev,item)=>prev+(item.price*item.quantity),0)}</h4>
<div className='mt-2 d-grid'>
  <button className='btn btn-success' onClick={()=>dispatch(checkout())}>CheckOut</button>

</div>
          </div>
        <Link className='btn btn-outline-info mt-5' to={'/'}>Shop More</Link>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Cart