import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import HeaderBar from './headerBar';
import SideBar from './sideBar';
import Aside from './aside';
import Section from './section'
import Footer from './footer'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = { redirectToReferrer: false };
    }
    
    render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;
        return (
            <div>
                <HeaderBar></HeaderBar>
                <SideBar></SideBar>
                <main id="content" role="main" className="main md-flex flex-wrap items-start m0 md-m2  p0 md-p2">
                    <div className="border-bottom  md-col-12"></div>
                    <Aside></Aside>
                    <Section></Section>
                </main>
                <Footer></Footer>
            </div>
        )
    }
}

export default Dashboard