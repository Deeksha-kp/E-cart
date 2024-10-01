import React ,{useState}from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {  useSelector,useDispatch } from 'react-redux';
import { searchWithKey } from '../Redux/slices/productSlice';

function Header() {
  const{items}=useSelector((state)=>state.wishReducer)
  const {cart}=useSelector((state)=>state.cartReducer)
  // console.log(items);

  const [key,setKey]=useState("")
  const dispatch=useDispatch()
  return (
    <>
    <Navbar className="bg-warning">
    <Container>
      <Navbar.Brand href="#home">
        <Link to={'/'} style={{textDecoration:'none',color:"black"}}>
      <i className="fa-solid fa-cart-shopping fa-bounce fa-xl" style={{color: "#000000", fontSize:"30px"}} />
        {''}
        E-Cart
        </Link>
      </Navbar.Brand>
   
    <div  className='d-flex'>
      <div className='d-flex'>
      <input type="text" onChange={(e)=>setKey(e.target.value)} placeholder='Enter keyword to search' className="form-control" />
      <button className='btn btn-success me-4' onClick={()=>dispatch(searchWithKey(key))}></button>
      </div>
<Link className='btn border-1  border-success me-3' to={'/wish'} style={{backgroundColor:"white"}}>
<i className="fa-solid fa-heart" style={{color: "#e00b0b",}} />
   
    Wish List
    {' '}
    <span className='badge bg-dark'>
      {items?.length}
    </span>
    </Link>
<Link className='btn border-1 border-success me-3' to={'/cart'} style={{backgroundColor:"white"}}>
<i className="fa-solid fa-cart-shopping " style={{color: "#14ab12"}} />
    Cart
    {' '}
    <span className='badge bg-dark'>
      {cart?.length}
    </span>
    </Link>

    </div>
    </Container>
  </Navbar>
  </>

  )
}

export default Header