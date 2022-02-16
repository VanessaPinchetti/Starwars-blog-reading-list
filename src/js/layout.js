import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Cards from "./component/Cards";
import Planets from "./component/Planets";
import Vehicles from "./component/Vehicles";
import Navbar from "./component/navbar";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

const Layout = () => {
	return <>
	<Router>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/cards/people/:id" element={<Cards />}/>
			<Route path="/planets/:id" element={<Planets />}/>
			<Route path="/vehicles/:id" element={<Vehicles />}/>
			<Route path= "*" element={<h1>Not Found</h1>}/>	
		</Routes>
		<Footer />
	</Router>
	</>
};

export default injectContext(Layout);