import React, { Component } from 'react'
import HeaderBar from './headerBar';
import SideBar from './sideBar';
import Aside from './aside';
import Section from './section'
import Footer from './footer'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <HeaderBar></HeaderBar>
                <SideBar></SideBar>
                <main id="content" role="main" className="main md-flex flex-wrap items-start m2  p2">
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