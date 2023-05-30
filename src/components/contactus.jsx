import React from 'react';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { VscCallIncoming } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import { BiUser } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiFacebookFill, RiGoogleFill, RiTwitterFill } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';

function contactus() {
    return (
        <>
            <section className='contact-us'>
                <div className='contact_banner'>
                    <h1 className='text-center mb-4'>Contact Us</h1>
                </div>
                <div className="container">
                    <div className='row gy-4 justify-content-center'>
                        <div className="col-lg-3">
                            <div className='con-box'>
                                <HiOutlineChatBubbleLeftRight className='chatus' />
                                <NavLink to="/" className="wtsapp">Chat Now</NavLink>
                                <p className='text-center'>Monday - Sunday<br />24 Hours / 7 Days a Week</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='con-box'>
                                <HiOutlineMail className='chatus' />
                                <NavLink to="mailto:liebigs2000@gmail.com" className="wtsapp">Email Us</NavLink>
                                <p className='text-center'>Our team will respond <br />to you soon</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='con-box'>
                                <VscCallIncoming className='chatus' />
                                <NavLink to="tel:+91-8336969334" className="wtsapp">+91-8336969334</NavLink>
                                <p className='text-center'>Monday - Sunday<br />8:00am - 8:00pm ET</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_info'>
                        <div className="row">
                            <div className="col-lg-5 c_col1">
                                <div>
                                    <h4>Contact Info</h4>
                                    <div className='mt-5'>
                                        <small><BiUser /> Name</small>
                                        <h6>Alen Stalker</h6>
                                        <small><HiOutlineMail /> Email</small>
                                        <h6>liebigs2000@gmail.com</h6>
                                        <small><HiOutlineMail /> Phone</small>
                                        <h6>+91-8336969334</h6>
                                        <h6>+91-03324658334</h6>
                                        <small><HiOutlineLocationMarker /> Address</small>
                                        <h6>3A, Dharmadas Row Kolkata - 700026</h6>
                                    </div>
                                    <div>
                                        <ul className='c_social'>
                                            <li>
                                                <NavLink to='/'><RiFacebookFill /></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/'><RiTwitterFill /></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/'><RiGoogleFill /></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/'><GrInstagram /></NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 c_col2">
                                <div className='c_form'>
                                    <h4>Get In Touch</h4>
                                    <Divider />
                                    <form action="/">
                                        <div className="row">
                                            <label htmlFor="name">Name</label>
                                            <div className="col-lg-6">
                                                <input type="text" name="fname" placeholder='First Name' />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" name="lname" placeholder='Last Name' />
                                            </div>
                                            <label htmlFor="email">Email</label>
                                            <div className="col-lg-12">
                                                <input type="email" name="email" placeholder='Enter your Email ID' />
                                            </div>
                                            <label htmlFor="message">Message</label>
                                            <div className="col-lg-12">
                                                <textarea name="message" rows="5" placeholder='Enter Your Message'></textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h1 className='text-center mb-4'>Easy To Find Us</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14742.596187704887!2d88.342823!3d22.517347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02774aa0f7568b%3A0xa45b4fb9fcc71ce6!2sLiebigs%20Agro%20Chem%20Pvt.%20Ltd!5e0!3m2!1sen!2sus!4v1683711709705!5m2!1sen!2sus" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contactus