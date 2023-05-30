import React from 'react';
import '../assets/css/style.css';
import { Link, NavLink } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
/* Images */
import brandLogo from '../assets/img/logo/liebigs_logo-163x62.webp'
import emptycart from '../assets/icons/empty-cart.png';
/* icon */
import { Avatar, Badge } from '@mui/material';
import { BsCart4 } from 'react-icons/bs';
import Sidebarmenu from './Sidebarmenu';
import { RiCloseFill } from 'react-icons/ri';
import { TiLocationOutline } from 'react-icons/ti';
import { FiDelete} from 'react-icons/fi';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { BiUser } from 'react-icons/bi';
import { IoHome } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { MdLocalLibrary } from 'react-icons/md';
import { GiRotaryPhone } from 'react-icons/gi';


function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const getData = useSelector((state) => state.cartreducer.carts);
    //console.log(getData);

    const color = {
        color : 'red'
    }


    return (
        <>

            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">
                            <img src={brandLogo} alt='Brand Logo' width="70%" />
                        </Link>
                        {/*  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse d-lg-block d-none" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               
                                <li className="nav-item" title='About Us'>
                                    <NavLink className="nav-link navs" to="/about-us"><MdLocalLibrary className='cart_icon' /></NavLink>
                                </li>
                                 <li className="nav-item" title='Home'>
                                    <NavLink className="nav-link navs" aria-current="page" to="/"><IoHome className='cart_icon'/></NavLink>
                                </li>
                                <li className="nav-item" title='Contact'>
                                    <NavLink className="nav-link navs" to="/contact-us"><GiRotaryPhone className='cart_icon' /></NavLink>
                                </li>
                            </ul> 
                        </div> 

                        <div className='d-flex'>
                            <Badge badgeContent={getData.length} color="primary" >
                                <BsCart4 className='cart_icon'
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                />
                            </Badge>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {
                                    getData.length
                                        ?
                                        <div className="card-details p-2">
                                            <RiCloseFill onClick={handleClose} className='close_btn' />
                                            <hr/>
                                            {
                                                getData.map((e) => {
                                                    return (
                                                        <>
                                                            <div className="row p-3">
                                                                <div className="col-lg-4">
                                                                    <div>
                                                                        <NavLink to={`/product/${e.id}`}>
                                                                            <img src={e.setImg} alt="sss" className='img-fluid' />
                                                                        </NavLink>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7">
                                                                    <div>
                                                                        <h4>
                                                                            {e.name}
                                                                        </h4>
                                                                        <h6>₹{e.price}</h6>
                                                                        <p><strong>Qty : </strong> {e.qty}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-1">
                                                                    <div>
                                                                        <h5 style={color}><FiDelete/></h5>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                            <hr/>
                                                        </>
                                                    )
                                                })
                                            }

                                            <div className='p-3 d-flex justify-content-between'>
                                                <h6>Total :<span> ₹3000</span></h6>
                                                <NavLink to="/cart">
                                                     <button className='btn_1' onClick={handleClose}>View Cart</button>
                                                </NavLink>
                                            </div>

                                        </div>
                                        :
                                        <div className="cart_area">
                                            <RiCloseFill onClick={handleClose} className='close_btn' />
                                            <div className='cart_emp'>
                                                <img src={emptycart} alt="empty cart" width='180' />
                                                <p className='emp_cart_text'>Your cart is empty</p>
                                            </div>
                                        </div>
                                }

                            </Menu>

                            <Avatar src='https://picsum.photos/id/237/200/200' alt='cds'
                            className='user_icon me-3'
                                onClick={handleClick1}
                                sx={{ ml: 2 }}
                                aria-controls={open1 ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open1 ? 'true' : undefined}
                            />
                            <Menu
                                anchorEl={anchorEl1}
                                id="account-menu"
                                open={open1}
                                onClose={handleClose1}
                                onClick={handleClose1}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <NavLink to='/profile'>
                                <MenuItem onClick={handleClose1}>
                                    <ListItemIcon>
                                        <BiUser />
                                    </ListItemIcon>
                                    My Account
                                </MenuItem>
                                </NavLink>
                                <NavLink to='/dashboard'>
                                <MenuItem onClick={handleClose1}>
                                    <ListItemIcon>
                                        <AiOutlineUnorderedList/>
                                    </ListItemIcon>
                                    My Order
                                </MenuItem>
                                </NavLink>
                                <NavLink to='/track-order'>
                                <MenuItem onClick={handleClose1}>
                                    <ListItemIcon>
                                        <TiLocationOutline />
                                    </ListItemIcon>
                                    Order Tracking
                                </MenuItem>
                                </NavLink>
                                <MenuItem onClick={handleClose1}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                            <ProSidebarProvider>
                                <Sidebarmenu />
                            </ProSidebarProvider>
                        </div>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default Header