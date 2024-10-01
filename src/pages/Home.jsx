import React,{useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk } from '../Redux/slices/productSlice'; 
import Spinner from 'react-bootstrap/Spinner';
import { nextPage,prevPage } from '../Redux/slices/productSlice';




function Home() {
  const {products,error,loading,productsPerPage,currentPage}=useSelector((state)=>state.productReducer)

  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(fetchProductThunk())
       console.log(products);
  },[])
 
  const totalPages=Math.ceil(products?.length/productsPerPage)
  const lastproductIndex=currentPage*productsPerPage //10,20,30
  const firstProductIndex=lastproductIndex-productsPerPage //0,10,20
  const visibleProducts=products?.slice(firstProductIndex,lastproductIndex)

 const handleNext=()=>{
  if(currentPage<totalPages){
        dispatch(nextPage())
  }
}
const handlePrev=()=>{
  if(currentPage>1){
    dispatch(prevPage())
  }
}

  return (
    <>
    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
        <Carousel>
      <Carousel.Item>
      <img src="https://www.smartkargo.com/wp-content/uploads/2022/05/ecommerce-delivery-cart.jpg" alt=""   className='' width={'80%'} height={'400px'} />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://etimg.etb2bimg.com/thumb/msid-76887515,width-1200,resizemode-4/.jpg" alt=""   className='' width={'80%'} height={'400px'} />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://assets.gqindia.com/photos/6070617423780a7fa9a3ec07/16:9/w_2560%2Cc_limit/Online%2520grocery%2520services.jpeg" alt=""   className='' width={'80%'} height={'400px'} />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        loading?
                    <h3>
                            <Spinner animation="border" role="status">
                            </Spinner><span>Loading...</span>
                    </h3>              
                     
                      :
                      (error?
                        <h3>{error}</h3>

                        :

                        <>
                        {
                            visibleProducts?.map(item=>
                                ( 
                                    <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder"> {item?.title}</h5>
                                                ${item?.price}
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                              <Link to={`/view/${item.id}`} className='btn btn-outline-info'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>)

                            )
                        }
                       
                        </>
                        
                      )


                  
                    }


                   
                </div>
            </div>
        </section>
        <div className='mt-4 d-flex justify-content-center'>
          <div>
            <button className='btn' onClick={handlePrev}>
            <i className="fa-solid fa-angles-left" style={{color: "#01060e",}} />
            </button>
            {'  '}
            {currentPage}/{totalPages}
            {'  '}
            <button className='btn' onClick={handleNext}>
            <i className="fa-solid fa-angles-right" style={{color: "#010813",}} />
            </button>
          </div>

        </div>
    
    
    </>
  )
}

export default Home