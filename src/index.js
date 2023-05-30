import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import ProductDetailsPopup from './components/ProductDetailsPopup';
import store from './store';
import { Provider } from 'react-redux';
import PlantsPage from './components/PlantsPage';
import AgroProductPage from './components/AgroProductPage';
import VegetableSeedProduct from './components/VegetableSeedProduct';
import TeaProductPage from './components/TeaProductPage';
import contactus from './components/contactus';
import Error from './components/Error';
import ProductInfo from './components/ProductInfo';
import ScrollToTop from './components/ScrollToTop';
import AddToCart from './components/AddToCart';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';
import MyAccount from './components/MyAccount';
import OrderTrack from './components/OrderTrack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <ScrollToTop/>
      <ProductDetailsPopup/>
      <Routes>
        <Route exact path='/' Component={App}/>
        <Route exact path='/plants' Component={PlantsPage}/>
        <Route exact path='/agro' Component={AgroProductPage}/>
        <Route exact path='/vegetable-seeds' Component={VegetableSeedProduct}/>
        <Route exact path='/tea-product' Component={TeaProductPage}/>
        <Route path='/about-us' Component={Aboutus}/>
        <Route path='/contact-us' Component={contactus}/>
        <Route path='/cart' Component={AddToCart}/>
        <Route path='/checkout' Component={Checkout}/>
        <Route path='/profile' Component={MyAccount}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='/product-info/:id' Component={ProductInfo}/>
        <Route path='/track-order' Component={OrderTrack}/>
        <Route path='*' Component={Error} />
      </Routes>
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
