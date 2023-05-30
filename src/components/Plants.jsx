import React from 'react'
import PlantsData from './CardsData'
import { RiShoppingCartFill } from 'react-icons/ri'
import { Rating, Stack } from '@mui/material'

import { useDispatch } from 'react-redux';
import {ADD, ADD1} from '../redux/actions/action';
import { NavLink } from 'react-router-dom';


function Cards() {

    const dispatch = useDispatch();

    const send = (e) =>{
        dispatch(ADD(e));
    }
    const send1 = (e) =>{
        dispatch(ADD1(e));
    }
    
    return (
        <>
            <section className='Plant_items mt-3'>
                <div className='container-lg'>
                    <div className='row gx-1 gy-3'>
                        {
                            PlantsData.map((element,i) => {
                                return (
                                    <>
                                        <div className='col-lg-3 col-md-3 cds'>
                                            <div className="card" style={{ width: '95%', margin: 'auto' }}>
                                                <NavLink to={`/product-info/${element.id}`}>
                                                    <img key={i} src={element.setImg} className="card-img-top" alt={element.alt} onClick={()=> send1(element)} />
                                                </NavLink>
                                                <div className="card-body">
                                                    <p className="card-title">{element.name}</p>
                                                    <Stack spacing={1}>
                                                        <Rating name='half-rating' defaultValue={1.5} precision={0.5} size='small'/>
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
            </section>

        </>
    )
}

export default Cards