import React from 'react';
import { teaProducts } from './CardsData';
import { Rating, Stack } from '@mui/material';
import { RiShoppingCartFill } from 'react-icons/ri';

import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action';

function TeaProduct() {

    const dispatch = useDispatch();

    const send = (e) =>{
        dispatch(ADD(e));
    }


    return (
        <>
            <div className='tea_products'>
                <div className='container'>
                    <div className='row gx-1 gy-3'>
                        {
                            teaProducts.map((element,id) => {
                                return (
                                    <>
                                        <div className='col-lg-3 cds'>
                                            <div key={id} className="card" style={{ width: '95%', margin: 'auto' }}>
                                                <img src={element.setImg} className="card-img-top" alt={element.alt} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{element.name}</h5>
                                                    <Stack>
                                                        <Rating name='half-rating' defaultValue={1.5} precision={0.5}/>
                                                    </Stack>
                                                    <div className='card-bottom'>
                                                        <p><b>&#8377; {element.price}</b></p>
                                                        <RiShoppingCartFill className='cart_icon' title='Add To Cart' onClick={()=> send(element)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeaProduct