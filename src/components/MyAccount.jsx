import React from 'react';
import Dashboard from './Dashboard';
import { BiUser } from 'react-icons/bi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';

import icon1 from '../assets/icons/shopping-cart.png';
import { NavLink } from 'react-router-dom';

function MyAccount() {
    return (
        <>
            <section className='pt-4 pb-4'>
                <div className="container">
                    <h1 className='ps-4'>My Account</h1>
                    <nav class="breadcrumb ps-4">
                        <a class="breadcrumb-item" href="/">Home</a>
                        <span class="breadcrumb-item active" aria-current="page">My Account</span>
                    </nav>
                    <div className='profile_header'>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"><BiUser /> My Account</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"><HiOutlineClipboardList/> Order History</a>
                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages"><ImProfile/> Update Profile</a>
                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"><RiLockPasswordFill/> Change Password</a>
                                    <a className="list-group-item list-group-item-action" id="list-logout-list" data-bs-toggle="list" href="#list-logout" role="tab" aria-controls="list-settings"><MdOutlineLogout/> Sign Out</a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div>
                                                    <img src="https://picsum.photos/id/237/300/300" alt="profile_picture" className='img-fluid rounded-circle' width='120'/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div>
                                                    <h3 className='text-center text-lg-start'>Hello... <span className=''>John Wick</span></h3>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ullam suscipit libero obcaecati doloremque culpa, perspiciatis quam tenetur id, maxime unde eligendi debitis dignissimos quas odit aut asperiores ab ut.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                        <Dashboard />
                                    </div>
                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                                    <div className='profile_info pt-lg-0 pt-3'>
                                        <div className="row">
                                            <div className="col-lg-12 mb-4">
                                                <label htmlFor="">Profile Image</label>
                                                <div>
                                                    <input type="file" id="img1" name="img" accept="image/*" />
                                                </div>
                                            </div>
                                            <div className='d-lg-flex mb-2'>
                                                <div className='me-3 profile_input'>
                                                    <lable>Full Name</lable>
                                                    <div>
                                                        <input type="text" id="img2" name="name" />
                                                    </div>
                                                </div>
                                                <div className='profile_input'>
                                                    <lable>Address</lable>
                                                    <div>
                                                        <input type="text" id="img3" name="img" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-lg-flex'>
                                                <div className='me-3 profile_input'>
                                                    <lable>Phone / Mobile</lable>
                                                    <div>
                                                        <input type="text" id="img2" name="name" />
                                                    </div>
                                                </div>
                                                <div className='profile_input'>
                                                    <lable>Email Address</lable>
                                                    <div>
                                                        <input type="text" id="img3" name="img" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='btn_2'>Update Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                                    <div className='profile_info'>
                                        <div className="row">
                                            <label>Current Password</label>
                                            <div className="col-lg-12">
                                                <div>
                                                    <input type="text" name="cp" id="" />
                                                </div>
                                            </div>
                                            <label>New Password</label>
                                            <div className="col-lg-12">
                                                <div>
                                                    <input type="text" name="np" id="" />
                                                </div>
                                            </div>
                                            <label>Confirm Password</label>
                                            <div className="col-lg-12">
                                                <div>
                                                    <input type="text" name="cfp" id="" />
                                                </div>
                                            </div>
                                            <div>
                                                <button className='btn_2'>Change Password</button>
                                            </div>
                                        </div>
                                    </div> 
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={icon1} alt="shoppingCart" className='img-fluid' width="300px"/>
                        <h5>Continue Shopping</h5>
                        <NavLink class="btn btn-primary" to="/" role="button">Shop Now</NavLink>
                    </div>
            
                </div>
            </section>
        </>
    )
}

export default MyAccount