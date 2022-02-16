import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return <div className="container" style={{ backgroundColor: "white" }}>
		<nav className="navbar navbar-expand-lg navbar-light">
			<Link className="navbar-brand" to="/">
				<img
					src="https://thumbs.dreamstime.com/b/esta-es-una-foto-de-star-wars-y-logos-stormtrooper-kiev-ucrania-septiembre-impresa-en-papel-colocada-sobre-fondo-blanco-205029125.jpg"
					width="150"
					height="60"
					className="d-inline-block align-top"
					alt=""
				/>
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
				</ul>
			</div>
			<DropdownButton id="dropdown-btn" variant="warning" title={"Favorites "}>
				{store.lista_favorito.map(favorito => {
					return (
						<Dropdown.Item>
							<div className="input-group mb-3">
								<div className="input-group-append" href="#">{favorito}
									<button type="button" className="btn btn-outline-secondary dropdown-toggle-split"  onClick={() => {
										const isLargeNumber = (element) => element === favorito
										actions.deleteFav(store.lista_favorito.findIndex(isLargeNumber))
									}}><FaTrash /></button>
								</div>
							</div>
						</Dropdown.Item>
					)
				})}

			</DropdownButton>
		</nav >
	</div>
};

export default Navbar;