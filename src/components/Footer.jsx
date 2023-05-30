import React from 'react';
import atm1 from '../assets/icons/paypal.png';
import atm2 from '../assets/icons/master-card.png';
import atm3 from '../assets/icons/card.png';
import atm4 from '../assets/icons/visa.png';

import { AiFillLock } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { RiPlantFill } from 'react-icons/ri';
import { GiCoffeeCup, GiFertilizerBag, GiPlantSeed } from 'react-icons/gi';


function Footer() {
    return (
        <>
            <section className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div>
                                <h3>About us</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, velit consequatur quae amet fugit ea quidem sit quia excepturi.</p>
                                <ul className='atmcard-icon'>
                                    <li>
                                        <img src={atm1} alt="atm-icon" />
                                    </li>
                                    <li>
                                        <img src={atm2} alt="atm-icon" />
                                    </li>
                                    <li>
                                        <img src={atm3} alt="atm-icon" />
                                    </li>
                                    <li>
                                        <img src={atm4} alt="atm-icon" />
                                    </li>
                                </ul>
                                <p><AiFillLock /> Secure Online Payment</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div>
                                <h3>Top Products</h3>
                                <ul className='footer_list_item'>
                                    <li>
                                        <NavLink to='/'><h6>Cutting Aid</h6></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'><h6>Booster2</h6></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'><h6>Bio NPK ( Organic Fertilizer )</h6></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'><h6>Sudha Susam ( Manure )</h6></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'><h6>Mitend Improved ( For Mites )</h6></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div>
                                <h3>Our Service</h3>
                                <ul className='footer_list_item'>
                                    <li>
                                        <NavLink to='/'>
                                            <h6><GiFertilizerBag /> Agriculture</h6>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'>
                                            <h6><RiPlantFill /> Horticulture</h6>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'>
                                            <h6><GiPlantSeed />Vegetable Seeds</h6>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'>
                                            <h6><GiCoffeeCup /> Tea Products</h6>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div>
                                <h3>Contact Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer