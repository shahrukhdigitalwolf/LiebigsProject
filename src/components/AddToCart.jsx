import React from 'react'
import emptyCart from '../assets/icons/empty.png';
import { useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { Chip, Divider } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AddToCart() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const getData = useSelector((state) => state.cartreducer.carts)

    return (
        <>
            <section className='addto_cart'>
                <div className="container">
                    <nav class="breadcrumb mt-4 mb-4">
                        <a class="breadcrumb-item" href="/">Home</a>
                        <span class="breadcrumb-item active" aria-current="page">Cart</span>
                    </nav>
                    {
                        getData.length
                            ?
                            <div className='cart_item'>
                                <hr />
                                {
                                    getData.map((e) => {
                                        return (
                                            <>
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div>
                                                            <img src={e.setImg} alt={e.alt} className='img-fluid' />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-9 d-flex justify-content-center flex-column">
                                                        <div className='p-3'>
                                                            <h5>{e.plantName}</h5>
                                                            <p>In Stock</p>
                                                            <h6>₹{e.price}</h6>
                                                            <p>QTY : {e.qty}</p>
                                                            <ul className='d-flex justify-content-between p-0'>
                                                                <li className='me-4'>
                                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                        <button type="button" class="btn btn-outline-primary">-</button>
                                                                        <button type="button" class="btn btn-outline-primary">0</button>
                                                                        <button type="button" class="btn btn-outline-primary">+</button>
                                                                    </div>

                                                                </li>
                                                                <li>
                                                                    <h4><AiFillDelete /></h4>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                <div className='pd_details'>
                                    <h3>Price Details</h3>
                                    <hr />
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
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <h6>Total Amount</h6>
                                            <h6>₹2800</h6>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <h6 style={{ color: 'green' }}>You will Save ₹200 in this order</h6>
                                            <NavLink to='/checkout'>
                                                <button className='btn_1'>Checkout</button>
                                            </NavLink>


                                        </div>

                                    </div>
                                </div>
                                <Button variant="outlined" onClick={handleClickOpen}>
                                    Slide in alert dialog
                                </Button>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                    style={{ maxWidth: '100%', width: '600px', margin: 'auto', display: 'block' }}
                                >
                                    <DialogTitle className='text-center'>{"Welcome to Liebigs Agro Chem"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            <div className='login_form'>
                                                <div className="form">
                                                    <div className="row">
                                                        <label htmlFor=""><b>Email Or Phone Number</b></label>
                                                        <div className="col-lg-12">
                                                            <input type="text" name="email" />
                                                        </div>
                                                        <label htmlFor=""><b>Password</b></label>
                                                        <div className="col-lg-12">
                                                            <input type="password" name="password" />
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <button className='btn_1'>Log In</button>
                                                        </div>
                                                        <Divider className='mt-4' style={{alignItems:'flex-start'}}>
                                                            <Chip label="OR" />
                                                        </Divider>
                                                        <div >
                                                            <ul className='mt-3 p-0 d-flex justify-content-center'>
                                                                <li className='me-2'><FcGoogle/></li>
                                                                <li><FaFacebook style={{color:'	#3b5998'}}/></li>
                                                            </ul>                   
                                                        </div>
                                                        <div>
                                                            <ul className='d-flex justify-content-between p-0'>
                                                                <li onClick={()=>{handleClickOpen1();handleClose();}} style={{cursor:'pointer',borderBottom:'1px solid gray',fontSize:'small'}}>Don't have an account?</li>
                                                                <li style={{cursor:'pointer',borderBottom:'1px solid gray',fontSize:'small'}}>Forget Password</li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContentText>
                                    </DialogContent>
                                </Dialog>
                                <div>
                                <Dialog
                                    open={open1}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose1}
                                    aria-describedby="alert-dialog-description"
                                    style={{ maxWidth: '100%', width: '600px', margin: 'auto', display: 'block' }}
                                >
                                    <DialogTitle className='text-center'>{"Welcome to Liebigs Agro Chem"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            <div className='login_form'>
                                                <div className="form">
                                                    <div className="row">
                                                        <label htmlFor=""><b>Name</b></label>
                                                        <div className="col-lg-6">
                                                            <input type="text" name="fname" placeholder='First Name' />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <input type="text" name="lname" placeholder='Last Name' />
                                                        </div>
                                                        <label htmlFor=""><b>Email Id</b></label>
                                                        <div className="col-lg-12">
                                                            <input type="text" name="lname" />
                                                        </div>
                                                        <label htmlFor=""><b>Password</b></label>
                                                        <div className="col-lg-12">
                                                            <input type="password" name="password" placeholder='Current Password' />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <input type="password" name="password" placeholder='New Password' />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <input type="password" name="password" placeholder='Confirm Password' />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button className='btn_1'>Create Account</button>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <ul className='p-0 mt-4'>
                                                                <li className='text-center' style={{fontSize:'small'}}>Already have an account? <span onClick={()=>{handleClickOpen();handleClose1();}} style={{color:'#0d6efd',cursor:'pointer'}}>Login Here!</span></li>
                                                            </ul>
                                                            
                                                        </div>  
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContentText>
                                    </DialogContent>
                                </Dialog>
                                </div>
                               
                            </div>
                            :
                            <div className='mt-5 mb-5'>
                                <img src={emptyCart} alt="empty-cart" className='img-fluid d-block m-auto' width="220" />
                                <p className='fs-4 text-center'>No items found in cart</p>
                            </div>

                    }

                </div>
            </section>
        </>
    )
}

export default AddToCart