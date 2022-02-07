import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<Link className="navbar-brand" to="/">STAR WARS</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<Link className="nav-link active" aria-current="page" to="/">People</Link>
					</li>
				</ul>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.lista_favorito.map(favorito=>{return <li><a className="dropdown-item" href="#">{favorito}<button onClick={()=>{
							const isLargeNumber = (element) => element === favorito
							
							actions.deleteFav(store.lista_favorito.findIndex(isLargeNumber))}}>x</button></a></li>})}
					</ul>																						
				</div>

			</div>
		</div>
	</nav>

};

export default Navbar;