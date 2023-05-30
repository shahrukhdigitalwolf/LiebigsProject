import React, {/*  useEffect,  useState */} from 'react';
import TeaProduct from './TeaProduct'
import icon1 from '../assets/icons/fast-delivery.png'
import icon2 from '../assets/icons/secureM.png'
import icon3 from '../assets/icons/badge.png'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AgroProducts from './AgroProducts';

function ProductInfo() {

   /*  const [data, setData] = useState([]); */

    const { id } = useParams();
    console.log(id);

    const getData = useSelector((state) => state.cartreducer.products);
    //setData(getData);


    /* const compare = () =>{
        let comparedata = getData.filter((e)=>{
            return e.id == id
        });
        setData(comparedata);
    }

    useEffect(()=>{
        compare()
    },[id]) 
 */
    return (
        <>
            <section className='products_info pt-4'>
                <div className="container">
                    {
                        getData.map((e) => {
                            return (
                                <>

                                    <div className="row">
                                        <div className="col-lg-5 d-flex justify-content-center flex-colunm">
                                            <div>
                                                <img src={e.setImg} alt="product" className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className='mt-2 mt-lg-2'>
                                                <h2>{e.name}</h2>
                                                <p className='in_stock'>In Stock</p>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perspiciatis nam commodi excepturi, dolorem ad consequatur ipsa aliquid optio doloribus possimus consequuntur quo! Ipsum vitae illo aperiam, nulla recusandae et?</p>
                                                <h3>₹150</h3>
                                                <div className='d-flex mt-4 mb-4'>
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <button type="button" class="btn btn-outline-primary">-</button>
                                                        <button type="button" class="btn btn-outline-primary">0</button>
                                                        <button type="button" class="btn btn-outline-primary">+</button>
                                                    </div>
                                                    <button type="button" class="btn btn-primary ms-3">Add To Cart</button>
                                                </div>
                                                <h3>Category : Live Plants</h3>
                                                <ul className='d-flex ps-0 mt-4'>
                                                    <li className='me-4'>
                                                        <img src={icon1} alt="icons1" width='70' className='d-block m-auto' />
                                                        <p className='text-center'><strong>Fast Delivery</strong></p>
                                                    </li>
                                                    <li className='me-4'>
                                                        <img src={icon2} alt="icons2" width='70' className='d-block m-auto' />
                                                        <p className='text-center'><strong>Secure Payment</strong></p>
                                                    </li>
                                                    <li className='me-3'>
                                                        <img src={icon3} alt="icons3" width='70' className='d-block m-auto' />
                                                        <strong><p className='text-center'>Top Brand</p></strong>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>

                                </>
                            )
                        })
                    }
                    <hr/>
                    <div>
                        <h2>Product Related to this item</h2>
                        <TeaProduct />
                        <AgroProducts/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductInfo