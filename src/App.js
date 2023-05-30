import React from 'react';
import './App.css';
import Myslider from './components/Myslider';
import CardSuggestion from './components/CardSuggestion';
import Tabs from './components/tabs';
import Info from './components/Info';

function App() {

  return (
    <>
      <Myslider/>
      <CardSuggestion/>
      <Tabs/>
      <Info/>
    </>
  );
}

export default App;
