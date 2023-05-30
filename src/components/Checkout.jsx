import React from 'react'

function Checkout() {
  return (
    <>
        <section className='ceckout'>
            <div className="container">
                <div>
                    <h1>Checkout</h1>
                    
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <hr/>
                        <div className='checkout_form_details'>
                            <form action="/">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div>
                                            <label htmlFor="">First Name</label>
                                            <br/>
                                            <input type="text" name="fname"  />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div>
                                            <label htmlFor="">Last Name</label>
                                            <br/>
                                            <input type="text" name="fname" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div>
                                            <label htmlFor="">Email Id</label>
                                            <br/>
                                            <input type="text" name="email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div>
                                            <label htmlFor="">Phone Number</label>
                                            <br/>
                                            <input type="text" name="phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div>
                                            <label htmlFor="">Company Name (Optional)</label>
                                            <br/>
                                            <input type="text" name="companyName" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div>
                                            <label htmlFor="">Street Address</label>
                                            <br/>
                                            <input type="text" name="addr1" />
                                            <br/>
                                            <input type="text" name="addr2" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div>
                                            <label htmlFor="">Town / City</label>
                                            <br/>
                                            <input type="text" name="townCity" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div>
                                            <label htmlFor="">State</label>
                                            <br/>
                                            <select name="state">
                                                <option value="0">Select State</option>
                                                <option value="0">State-1</option>
                                                <option value="0">State-2</option>
                                                <option value="0">State-3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div>
                                            <label htmlFor="">Pin Code</label>
                                            <br/>
                                           <input type="text" name="pincode" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='mt-3 mb-3'>
                                            <button className='btn_1 me-3'>Reset</button>
                                            <button className='btn_1'>Add Details</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5">
                    <div className='pd_details'>
                                    <h3>Order Summery</h3>
                                    <hr/>
                                    <div>
                                       <div className="d-flex justify-content-between">
                                        <h6>Price</h6>
                                        <h6>₹3000</h6>
                                       </div>
                                       <div className="d-flex justify-content-between">
                                        <h6>Discount</h6>
                                        <h6>-₹300</h6>
                                       </div>
                                       <div className="d-flex justify-content-between">
                                        <h6>Delivery Charge</h6>
                                        <h6>₹100</h6>
                                       </div>
                                       <hr/>
                                       <div className="d-flex justify-content-between">
                                        <h6>Total Amount</h6>
                                        <h6>₹2800</h6>
                                       </div>
                                       <hr/>
                                       <div className="d-flex justify-content-between">
                                       <h6 style={{color:'green'}}>You will Save ₹200 in this order</h6>
                                            <button className='btn_1'>Place Order</button>
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

export default Checkout