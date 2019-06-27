import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import reload from '../icons/reload.svg'

class ForgotPWD extends Component {
    
    section = () => {
        return (
            <section className="commerce-blog-wrapper col-12 md-col-4 px2 sm-px0 pt2 pb3 md-px4 md-pt1 md-pb1 md-mx6 right">
                <div className="mb4 center">
                    <img src={reload}  width="100" height="100" alt="" />
                </div>
                <h3 className="center">forgot password ?</h3>
                <div className="flex flex-column">
                    <form action="index.html">
                        <div className="ampstart-input inline-block relative m0 p0 mb2 mt3 border-bottom ">
                            <input type="text"  name="email" id="email" className="block border-none p0 m0" placeholder="Email" />
                            <label htmlFor="email" className="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Email</label>
                        </div>
                        <div>
                            <button type="submit" className="ampstart-btn caps col-12 mt4 mb4 border-none">
                            <Link to="/dashboard">recover</Link>
                            </button>
                        </div>
                    </form>
                </div>
                <Link to="/"><span className="important">back to sign in page</span> </Link>
            </section>
        )
    }

    render() {
        return (
            <main id="content" role="main" className="main md-flex flex-wrap  m2  p2 content-center  justify-content items-center justify-center  ">
                {this.section()}
            </main>
        )
    }
}


export default ForgotPWD
