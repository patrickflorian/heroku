import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Store from './store/config'

import HeaderBar from './component/headerBar';
import SideBar from './component/sideBar';
import Aside from './component/aside';
import Section from './component/section'
import Footer from './component/footer'

import './css/page.css';

class App extends Component {
  render() {
    return (<Provider store={Store}>
      <HeaderBar></HeaderBar>
      <SideBar></SideBar>
      <main id="content" role="main" className="main md-flex flex-wrap items-start m2  p2">
      <div className="border-bottom  md-col-12"></div>
      <Aside></Aside>
      <Section></Section>
      </main>
      <Footer></Footer>
      </Provider>
    );
  }
}

export default App;
