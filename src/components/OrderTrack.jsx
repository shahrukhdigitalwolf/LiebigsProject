import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import img1 from '../assets/img/product/p1.jpg';


const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
];

function OrderTrack() {
    return (
        <>
            <section className='pt-3 pb-3'>
                <div className="container">
                    <div className='p-2'>
                        <h1>#Track Order</h1>
                    </div>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div className='pt-4'>
                        <h4>Your Order</h4>
                        <div className='pb-3'>
                            <div className="row">
                                <div className="col-lg-1 d-flex justify-content-center flex-column">
                                    <div className='d-block m-auto'>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="" id=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div>
                                        <img src={img1} alt="" className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <h5>Product Title</h5>
                                        <p>Product Id : #12543</p>
                                        <p>Tracking id : #78945625</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pb-3'>
                            <div className="row">
                                <div className="col-lg-1 d-flex justify-content-center flex-column">
                                    <div className='d-block m-auto'>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="" id=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div>
                                        <img src={img1} alt="" className='img-fluid'/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <h5>Product Title</h5>
                                        <p>Product Id : #12543</p>
                                        <p>Tracking id : #78945625</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderTrack