import React from 'react'
import banner1 from '../assets/img/banner/new1.jpg'
import banner2 from '../assets/img/banner/new2.jpg'
import banner3 from '../assets/img/banner/new3.jpg'



function Myslider() {

 

  return (
    <>
      <section>
        <div className=''>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className={`carousel-item active`}>
                <div className="slide1">
                  <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center flex-column order-2 order-lg-1">
                      <div className='p-5 d-block m-auto'>
                        <h1>Your Summer Sill</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores expedita praesentium iure laudantium minima suscipit consequuntur sapiente autem error tempore quo quasi obcaecati laborum impedit, fugit ipsum voluptatum soluta maiores.
                        </p>
                        <button className='btn_1'>Shop Now</button>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                      <div>
                        <img src={banner1} alt="b1" className='img-fluid s_img' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slide2">
                  <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center flex-column order-2 order-lg-1">
                      <div className='p-5 d-block m-auto'>
                        <h1>Grow Plant For Better Life</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores expedita praesentium iure laudantium minima suscipit consequuntur sapiente autem error tempore quo quasi obcaecati laborum impedit, fugit ipsum voluptatum soluta maiores.
                        </p>
                        <button className='btn_1'>Shop Now</button>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                      <div>
                        <img src={banner2} alt="b1" className='img-fluid s_img' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slide3">
                  <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center flex-column order-2 order-lg-1">
                      <div className='p-5 d-block m-auto'>
                        <h1>The World Of Plants</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>
                        <button className='btn_1'>Shop Now</button>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                      <div>
                        <img src={banner3} alt="b1" className='img-fluid s_img' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Myslider