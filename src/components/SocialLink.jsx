import React from 'react'
import { RiFacebookFill, RiGoogleFill, RiTwitterFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

function SocialLink() {
    return (
        <>
            <div className='social_icons'>
                <ul>
                    <li>
                        <NavLink to='/'><RiFacebookFill className='s_icons'/></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><RiTwitterFill className='s_icons' /></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><RiGoogleFill className='s_icons'/></NavLink>
                    </li>
                    <li>
                        <NavLink to='/'><GrInstagram className='s_icons' /></NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SocialLink