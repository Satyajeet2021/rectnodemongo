// import React from "react";

// function Footer() {
//   return (
//     <div className="footer">
//       <h1>This is footer</h1>
//     </div>
//   );
// }

// export default Footer;
import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import image from '../components/logo2.svg';
// import { Row, Col, Menu, Icon, Alert } from 'antd'

// css
// import './footer.scss'

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

// this is a class because it needs state
class Footer extends Component {

  componentDidMount() {    

  }

  render() {
    console.log('this.props.current footer', this.props.current)

    return (
      <footer className='footer'>
        <div className='logo'>
          <img src={image} height={100} width={100} />
        </div>
        <ul>
          <li>
            <NavLink
              to="/about"
              activeClassName="selected">about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              activeClassName="selected">terms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="selected">privacy
            </NavLink>
          </li>
          {/* <li>
          <NavLink to='/about' activeClassName="selected">
            About
          </NavLink>
          </li> */}
        </ul>
      </footer>
    )
  }
}

export default Footer