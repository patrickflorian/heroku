import React , {Component} from 'react';
import logo from "../img/mymap.png";

class Footer extends Component{
    render(){
        return (
            <footer className="commerce-footer center">
      <nav className="mx-auto md-mb0 md-pt2 md-pb1">
        <ul className="list-reset flex flex-wrap my0 md-pl4 md-pr4 md-mxn4">
          <li className="pt3 md-pt0 md-px4 col-12 md-col-3 lg-col-2">
            <h2 className="commerce-footer-header h7 pb2">Contact Us</h2>
            <ul className="list-reset pb3 md-mx0">
              <li>
                <a className="text-decoration-none" href="tel:+237695349610">+237 695349610</a>
              </li>
              <li>
                <a className="text-decoration-none" href="mailto:noumbissipatrick@gmail.com">noumbissipatrick@gmail.com</a>
              </li>
              <li>
                <a className="text-decoration-none" href="/">trouver une salle</a>
              </li>
            </ul>
            <hr className="md-hide lg-hide col-12 mx0"/>
          </li>
          <li className="flex-auto right-align">
            <img src={logo} alt="[company logo]"/>
          </li>
        </ul>
      </nav>
    </footer>
        )
    }
}

export default Footer