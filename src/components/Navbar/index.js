import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import image from './logo1.svg';

const Navbar = () => {
return (
	<>

	
	<Nav>
		<Bars />
		<div className='logo1'>
          <img src={image} height={100} width={100} />
        </div>
		<NavMenu>
		<NavLink to='/'>
			Aircraft for Sale
		</NavLink>
		<NavLink to='/FindABroker' activeStyle>
			Find a Broker
		</NavLink>
		<NavLink to='/SellToday' activeStyle>
			Sell Today
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Post an Ad</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

// import React from 'react';
// import {
//     Menu,
//     MenuItem,
//     MenuButton
// } from '@szhsin/react-menu';
// import '@szhsin/react-menu/dist/index.css';
// import '@szhsin/react-menu/dist/transitions/slide.css';

// export default function Example() {
//     return (
//         <Menu menuButton={<MenuButton>Open menu</MenuButton>} transition>
//             <MenuItem>New File</MenuItem>
//             <MenuItem>Save</MenuItem>
//             <MenuItem>Close Window</MenuItem>
//         </Menu>
//     );
// }
