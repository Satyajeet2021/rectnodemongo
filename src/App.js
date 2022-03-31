import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/search';

// import TextField from "@mui/material/TextField";
import TextField from '@mui/material/TextField';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Department from './pages/department';
import Faculties from './pages/faculties';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import { FaCalendar } from 'react-icons/fa';
import FindABroker from './pages/FindABroker';
import SellToday from './pages/SellToday';
import Footer from "./components/footer";



function App() {
return (
	<Router>
	<Navbar />
	<Search />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/department' component={Department} />
		<Route path='/faculties' component={Faculties} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/FindABroker' component={FindABroker} />
		<Route path='/SellToday' component={SellToday} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	<Footer />
	</Router>
);
}

export default App;
