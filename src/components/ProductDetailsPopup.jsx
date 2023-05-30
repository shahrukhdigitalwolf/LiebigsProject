import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react'
import img1 from '../assets/img/bg/bg.jpg';

function ProductDetailsPopup() {
    const [open, setOpen] = useState(false);
    /* const handleClickOpen = () => {
        setOpen(true);
    };  */

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section className='product_details_popup'>
                {/*  <Button variant="outlined" onClick={handleClickOpen}>
                    Open alert dialog
                </Button>  */}


                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <img src={img1} alt="plant" className='img-fluid' width='500px'/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <DialogTitle id="alert-dialog-title" className='pt-4 pb-1'>
                                {"Product Title"}
                                <p className='in_stock'>In Stock</p>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Let Google help apps determine location. This means sending anonymous
                                    location data to Google, even when no apps are running.
                                </DialogContentText>
                                <h3>Price : 150</h3>
                                <div className='d-flex mt-4'>
                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                        <button type="button" class="btn btn-outline-primary">-</button>
                                        <button type="button" class="btn btn-outline-primary">0</button>
                                        <button type="button" class="btn btn-outline-primary">+</button>
                                    </div>
                                    <button type="button" class="btn btn-outline-primary ms-3">Add To Cart</button>
                                </div>
                                <div className='mt-3'>
                                    <h4>Catogery</h4>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Disagree</Button>
                                <Button onClick={handleClose} autoFocus>
                                    More Info
                                </Button>
                            </DialogActions>
                        </div>
                    </div>
                </Dialog>
            </section>
        </>
    )
}

export default ProductDetailsPopup