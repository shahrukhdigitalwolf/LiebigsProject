import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

import { BiCategoryAlt, BiAlignRight, BiPhoneCall } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import { GiCoffeeCup, GiFertilizerBag, GiPlantSeed } from 'react-icons/gi';
import { RiPagesFill, RiPlantFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

function Sidebarmenu() {

    const { collapseSidebar } = useProSidebar();

    const getData = useSelector((state) => state.cartreducer.carts);

    return (
        <>
            <main>
                <BiAlignRight className='sidebar_open_button' onClick={() => collapseSidebar()} style={{ cursor: 'pointer' }} />
            </main>
            <div className="overlay" onClick={() => collapseSidebar()} style={{ cursor: 'pointer' }}></div>
            <div className='sidebarmenu'>
                <Sidebar >
                    <SlClose className='sidebar_close_button' onClick={() => collapseSidebar()} style={{ cursor: 'pointer' }} />
                    <Menu>
                        <NavLink to='/'>
                            <MenuItem icon={<AiTwotoneHome className='heart_icon' />} onClick={() => collapseSidebar()}>
                                Home
                            </MenuItem>
                        </NavLink>
                        <SubMenu label="Products" icon={<BiCategoryAlt className='heart_icon' />}>
                            <NavLink to="/plants">
                                <MenuItem icon={<RiPlantFill />} onClick={() => collapseSidebar()}>
                                    Plants
                                </MenuItem>
                            </NavLink>
                            <NavLink to='/vegetable-seeds'>
                                <MenuItem icon={<GiPlantSeed />} onClick={() => collapseSidebar()}>
                                    Vegetable Seeds
                                </MenuItem>
                            </NavLink>
                            <NavLink to='/agro'>
                                <MenuItem icon={<GiFertilizerBag />} onClick={() => collapseSidebar()}>
                                    Agro Products
                                </MenuItem>
                            </NavLink>
                            <NavLink to='/tea-product'>
                                <MenuItem icon={<GiCoffeeCup />} onClick={() => collapseSidebar()}>
                                    Tea Products
                                </MenuItem>
                            </NavLink>
                        </SubMenu>
                        <NavLink to='/about-us'>
                            <MenuItem icon={<RiPagesFill className='heart_icon' />} onClick={() => collapseSidebar()}>
                                About Us
                            </MenuItem>
                        </NavLink>
                        <NavLink to='/contact-us'>
                            <MenuItem icon={<BiPhoneCall className='heart_icon' />} onClick={() => collapseSidebar()}>
                                Contact Us
                            </MenuItem>
                        </NavLink>
                        <div className='sidebar_footer'>
                            <NavLink to="/cart">
                                <MenuItem icon={<Badge badgeContent={getData.length} color="primary"><TiShoppingCart className='heart_icon' /></Badge>} onClick={() => collapseSidebar()}>
                                    Add to cart
                                </MenuItem>
                            </NavLink>

                            <NavLink to="/profile">
                            <MenuItem icon={<FaUserCircle className='heart_icon' />} onClick={() => collapseSidebar()}>
                                Account
                            </MenuItem>
                            </NavLink>
                        </div>
                    </Menu>
                </Sidebar>

            </div>
        </>
    )
}

export default Sidebarmenu