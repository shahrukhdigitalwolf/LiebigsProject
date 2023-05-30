import React from 'react';
import { vegetableData } from './CardsData';
import { Rating, Stack } from '@mui/material';
import { RiShoppingCartFill } from 'react-icons/ri';

import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action';

function VegetableSeed() {

    const dispatch = useDispatch();

    const send = (e) =>{
        dispatch(ADD(e));
    }

  return (
    <>
        <div className='vegetable_seeds'>
            <div className='container'>
                <div className='row gx-1 gy-3'>
                    {
                        vegetableData.map((element)=>{
                            return(
                                <>
                                    <div className='col-lg-3 cds'>
                                    <div className="card" style={{ width: '95%', margin: 'auto' }}>
                                                <img src={element.setImg} className="card-img-top" alt={element.alt} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{element.name}</h5>
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
        </div>
    </>
  )
}

export default VegetableSeed