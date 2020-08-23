import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer_container'>
            <h5 className='footer_container-content'>
            <span className='copyright'>&copy;</span>
            2020 <span className='footer-name'>Louis Quach</span>. All right reserved.
            </h5>
        </div>
    )
}

export default Footer;