import React from 'react'
import img1 from '../assets/icons/fast.png'
import img2 from '../assets/icons/top.png'
import img3 from '../assets/icons/money.png'
import img4 from '../assets/icons/support.png'

import client1 from '../assets/img/people/1.avif'
import client2 from '../assets/img/people/2.avif'
import client3 from '../assets/img/people/3.avif'
import client4 from '../assets/img/people/4.webp'

function Info() {
  return (
    <>
      <section className="why_you_choose_us">
        <div className="container">
          <div>
            <h1 className='text-center'>Why You Choose Us</h1>
          </div>
          <div>
            <div className="row">
              <div className="col-lg-3 cds">
                <div className='wyc_box'>
                  <img src={img1} alt="fast work" />
                  <div className='why_you_choose_us_info'>
                    <h4 className='htx'>Fastest Work</h4>
                    <p className='ptx'>Just place your order. We'll despatch it within 48 hours.</p>
                  </div>

                </div>
              </div>
              <div className="col-lg-3 cds">
                <div className='wyc_box'>
                  <img src={img2} alt="Top Quality" />
                  <div className='why_you_choose_us_info'>
                    <h4 className='htx'>Top Quality</h4>
                    <p className='ptx'>We have certified laboratories to maintain top quality for 30+ years.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 cds">
                <div className='wyc_box'>
                  <img src={img3} alt="Affordable Price" />
                  <div className='why_you_choose_us_info'>
                    <h4 className='htx'>Affordable Price</h4>
                    <p className='ptx'>We strive to keep the price of our products within your budget.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 cds">
                <div className='wyc_box'>
                  <img src={img4} alt="Customer Support" />
                  <div className='why_you_choose_us_info'>
                    <h4 className='htx'>Customer Support</h4>
                    <p className='ptx'>We are just a phone call away whenever you need us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonials'>
        <div className="container">
          <div className='mb-5'>
            <h1 className='text-center mb-3'>What Our Clients Say</h1>
          </div>
          <div className='row gy-4'>
            <div className="col-lg-6">
              <div className='client_card'>
                <div className='d-flex'>
                  <img src={client1} alt="client 1" className='img-fluid rounded-circle me-3' width="85" height="100" />
                  <div>
                    <h2>Dr.Mammen Chandy</h2>
                    <p className='ptx'>Director,TATA Medical Centre</p>
                  </div>
                </div>
                <div className='col-lg-12 mt-3 '>
                  <p>
                    We thank M/S Liebigs Agro Chem Pvt Ltd for installing and maintaing the gardens at TMC so that even the staff look forward to coming to work here.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className='client_card'>
              <div className='d-flex'>
                <img src={client2} alt="client 1" className='img-fluid rounded-circle me-3' width="85" height="100" />
                <div>
                  <h2>Dr.Suraj Agarwal</h2>
                  <p className='ptx'>Principal of Vidyanagar College</p>
                </div>
              </div>
              <div className='col-lg-12 mt-3 '>
                <p>
                  Liebigs always Provide best quality Products..They never compromise with quality.They always provide great quality products with affordable price.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-6">
            <div className='client_card'>
              <div className='d-flex'>
                <img src={client3} alt="client 1" className='img-fluid rounded-circle me-3' width="85" height="100" />
                <div>
                  <h2>_______</h2>
                  <p className='ptx'>Liebigs Customer</p>
                </div>
              </div>
              <div className='col-lg-12 mt-3 '>
                <p>
                I use Liebigs’s products almost a decade. Liebigs’s products have helped to increase my yield.Also my cost has reduced by 30% to 50%.I am very happy as a customer.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-6">
            <div className='client_card'>
              <div className='d-flex'>
                <img src={client4} alt="client 1" className='img-fluid rounded-circle me-3' width="85" height="100" />
                <div>
                  <h2>P.K Chowdhury</h2>
                  <p className='ptx'>Ex General Manager</p>
                </div>
              </div>
              <div className='col-lg-12 mt-3 '>
                <p>
                  Tea Elixir and Zilet Tea are currently under spraying in our Estate & we are now sure that those have come as a boon to the Industry & will prove hugely beneficial due to the positive properties observed after using those chemicals.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Info