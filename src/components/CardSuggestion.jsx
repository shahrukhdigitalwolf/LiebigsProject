import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import icon1 from '../assets/icons/spray.avif';
import icon2 from '../assets/icons/icon-3.webp';
import icon3 from '../assets/icons/growth.avif';
import icon4 from '../assets/icons/gardener.avif';
import icon5 from '../assets/icons/flower.avif';
import icon6 from '../assets/icons/barrow.avif';


function CardSuggestion() {
    return (
        <>
            <section className='what_we_offer'>
                <div className='container'>
                    <div className='m-3'>
                        <h1 className='text-center'>What We Offer</h1>
                    </div>
                    <OwlCarousel items={5}
                        className="owl-theme"
                        loop
                        nav={false}
                        dots={false}
                        autoplay={true}
                        margin={8}
                        responsive={
                            {
                                '1': {
                                    items: 1
                                },
                                '767': {
                                    items: 2
                                },
                                '1000': {
                                    items: 3
                                }
                            }
                        } >
                        <div className='item'>
                            <div className='what_we_offer_list'>
                                <div className='row'>
                                    <div className='col-lg-8 order-lg-1 order-2'>
                                        <h3 className='text1'>Agriculture</h3>
                                        <p className='text2'>Manufacturer of Organic Fertilizer,Pesticides,Growth promoter etc</p>
                                    </div>
                                    <div className='col-lg-4 d-flex justify-content-center flex-column order-lg-2 order-1'>
                                        <img src={icon1} alt='spray' className='what_we_offer_list_img'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='what_we_offer_list'>
                                <div className='row'>
                                    <div className='col-lg-8 order-lg-1 order-2'>
                                        <h3 className='text1'>Special Tea Products</h3>
                                        <p className='text2'>Fertilizer, Growth Regulator</p>
                                    </div>
                                    <div className='col-lg-4 d-flex justify-content-center flex-column order-lg-2 order-1'>
                                        <img src={icon2} alt='spray' className='what_we_offer_list_img'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='what_we_offer_list'>
                                <div className='row'>
                                    <div className='col-lg-8 order-lg-1 order-2'>
                                        <h3 className='text1'>Nursery Division</h3>
                                        <p className='text2'>Cactus, Succulent, Aglaonema, Fruit Plants, Ornamental Plants</p>
                                    </div>
                                    <div className='col-lg-4 d-flex justify-content-center flex-column order-lg-2 order-1'>
                                        <img src={icon3} alt='spray' className='what_we_offer_list_img'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='what_we_offer_list'>
                                <div className='row'>
                                    <div className='col-lg-8 order-lg-1 order-2'>
                                        <h3 className='text1'>30+ Years Experience</h3>
                                        <p className='text2'>We have more than 30 yrs of Experience.</p>
                                    </div>
                                    <div className='col-lg-4 d-flex justify-content-center flex-column order-lg-2 order-1'>
                                        <img src={icon4} alt='spray' className='what_we_offer_list_img'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='what_we_offer_list'>
                                <div className='row'>
                                    <div className='col-lg-8 order-lg-1 order-2'>
                                        <h3 className='text1'>Horticulture</h3>
                                        <p className='text2'>Landscapping, Gardening etc</p>
                                    </div>
                                    <div className='col-lg-4 d-flex justify-content-center flex-column order-lg-2 order-1'>
                                        <img src={icon5} alt='spray' className='what_we_offer_list_img'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='what_we_offer_list'>
                                <div className='row'>
                                    <div className='col-lg-8 order-lg-1 order-2'>
                                        <h3 className='text1'>Top Quality Seeds</h3>
                                        <p className='text2'>Vegetable seeds,Imported Flower Seeds.</p>
                                    </div>
                                    <div className='col-lg-4 d-flex justify-content-center flex-column order-lg-2 order-1'>
                                        <img src={icon6} alt='spray' className='what_we_offer_list_img'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>

        </>
    )
}

export default CardSuggestion