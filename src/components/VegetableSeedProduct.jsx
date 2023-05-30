import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

import img1 from '../assets/img/product/cta-bg-1.webp'
import img2 from '../assets/img/product/cta-bg-2.webp'
import img3 from '../assets/img/product/cta-bg-3.webp'
import VegetableSeed from './VegetableSeed';

function VegetableSeedProduct() {
  return (
    <>
        <section className='product_page'>
                <div className='vegetable_banner'>
                    <h1 className='text-center'>Vegetable Seeds</h1>
                    <nav className="breadcrumb d-flex justify-content-center">
                        <NavLink className="breadcrumb-item" to="/">Home</NavLink>
                        <span className="breadcrumb-item active" aria-current="page">Vegetable Seeds</span>
                    </nav>
                </div>
                <div className="container">
                    <VegetableSeed />
                    <Stack spacing={2}  className='mt-4 mb-4'>
                        <Pagination count={10} size="small" shape="rounded" />
                    </Stack>
                    <div className='pb-3'>
                        <h1 className='pt-3 pb-3'>Related Product</h1>
                        <div className="row gy-3">
                            <div className="col-lg-4">
                                <div>
                                    <img src={img1} alt="img1" className='img-fluid rounded'/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <img src={img2} alt="img2" className='img-fluid rounded'/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <img src={img3} alt="img3" className='img-fluid rounded' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default VegetableSeedProduct