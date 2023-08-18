import React from 'react';
import img1 from '../assets/img/product/p2.jpg';
import img2 from '../assets/img/product/preview.jpg';
import SocialLink from './SocialLink';

import shape1 from '../assets/img/bg/shape1.png';
import shape2 from '../assets/img/bg/shape2.png';


function Aboutus() {
  return (
    <>
      <section className='about-us'>
        <div className="container">
          <div className="row gy-0">
            <div className="col-lg-6 d-flex justify-content-center flex-column">
              <div className='l_info1 p-3'>
                <h2>Welcome to <span className='display-5'>Liebigs</span><span className='display-2' style={{ color: '#039701' }}>.</span></h2>
                <p>
                  We at Liebigs are firmly committed towards bringing changes in modern agriculture through our products & services that are designed to benefit  farmers and improve their standard of living.We aim to create value through innovation,growth and generating income for them.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img src={img1} alt="img1" className='img-fluid' width='580px' />
              </div>
            </div>
          </div>
          <div>
            <div className="row gy-1">
              <div className="col-lg-3">
                <div className='about_c1'>
                  <h5>Plants</h5>
                  <p>
                    Plants as living things that contribute to the health of our planet at Liebigs Agro
                    Chem, not merely as inanimate objects. Our products are made to support plants of their life cycles.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className='about_c1'>
                  <h5>Agro</h5>
                  <p>
                    Our commitment to AgroSciences drives a wide range of innovative approaches
                    intended to improve crop quality, sustainability, and agricultural output.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className='about_c1'>
                  <h5>Vegetable</h5>
                  <p>
                    We know that vegetables play an important part in both maintaining a healthy diet and
                    ensuring the safety of the world&#39;s food supply.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className='about_c1'>
                  <h5>Tea</h5>
                  <p>
                    Taste the authentic taste of Tea by Liebigs Agro Chem. Liebigs Agro Chem&#39;s tea is a
                    symphony of nature&#39;s finest notes, carefully orchestrated to delight your senses with
                    every sip.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-5 pb-4'>
            <div className="row gy-3">
              <div className="col-lg-6">
                <div>
                  <img src={img2} alt="FreePikImage" className='img-fluid rounded' width='580px' />
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center flex-column">
                <div className='l_info1 p-4'>
                  <h2>From tea gardens to teacups</h2>
                  <p>
                    Indulge in the flavors of Liebigs Agro Chem tea, where every sip takes you on the
                    delightful ride of the tastiest tea. You&#39;ll taste the richness and complexity that distinguish
                    our teas from others with just one infusion. Whether you&#39;re savoring the boldness of
                    black tea, the freshness of green tea, or the calming comfort of herbal blends, our teas
                    are a tribute to the time-honored craft of making tea.
                  </p>
                </div>
                <SocialLink />
              </div>
            </div>
            <div className='about_video'>
              <div className='yt-frame'>
                <iframe className='d-block m-auto' width="90%" height="400" src="https://www.youtube.com/embed/HIo89xD---E" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <img src={shape1} alt="safdv" className='shape1' />
        <img src={shape2} alt="safdv" className='shape2' />
      </section>
    </>
  )
}

export default Aboutus