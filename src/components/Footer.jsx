import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-dark py-2 container-fluid'>
     <Row className='p-5'>
    <Col sm={12} md={5}>
      <h3>E-Cart</h3>
      <p style={{textAlign:'justify'}}>
     <h6> Shop with Confidence</h6>
Explore a wide range of products tailored to meet your needs. We ensure secure transactions and customer satisfaction at every step.
</p>
<p style={{textAlign:'justify'}}>
<h6>Customer Support</h6>
Need help? Our dedicated support team is available 24/7 to assist you. Contact us via email, chat, or phone for any inquiries.
      </p>
<p><a href="" style={{color:'white'}}>deekshakp546@gmail.com</a></p>
<p><a href="" style={{color:'white'}}>Instagram</a></p>
<p><a href="" style={{color:'white'}}>Twitter</a></p>
    </Col>
    <Col sm={12} md={2}>
      <h3>Links</h3>
      <div className='d-flex flex-column '  >
           <Link to={'/'} style={{color:'white'}}>Home </Link>
           <Link to={'/wish'} style={{color:'white'}}>Wishlist </Link>
           <Link to={'/cart'} style={{color:'white'}}>Cart</Link>

      </div>
    </Col>
    <Col sm={12} md={5}>
      <h3>FeedBack</h3>
      <textarea name='' id='' className='form-control'></textarea>
      <button className='btn btn-info mt-4'>send</button>
    </Col>
      </Row> 

    </div>
    </>
  )
}

export default Footer