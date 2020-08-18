import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '././components/navbar/navbar'
import Home from './components/homePage/home'
import Footer from './components/footer/footer'
import MessengerCustomerChat from 'react-messenger-customer-chat';

// import Form from './components/form/form'
// import MU from './components/material ui practice/mu'
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <MessengerCustomerChat
        pageId="159040048456477"
        appId="2344389812536661"
      />,
      <Footer />
      {/* <Form/> */}
      {/* <MU /> */}
    </div>
  );
}
export default App;



