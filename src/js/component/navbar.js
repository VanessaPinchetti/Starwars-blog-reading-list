import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';
import { GrEmptyCircle } from 'react-icons/gr'

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return <div className="container" style={{ backgroundColor: "#fbfbfb"}}>
		<nav className="navbar navbar-expand-lg navbar-light">
			<Link className="navbar-brand" to="/">
				<img
					src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
					width="80"
					height="30"
					className=""
					alt="Star Wars"
					style={{marginLeft:"40px"}}
				/>
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
				<li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cards/people/">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/planets/:id">
                  Planets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vehicles/:id">
                  Starship
                </Link>
              </li>
				</ul>
			</div>
			<DropdownButton id="dropdown-btn" variant="dark" title={"Favorites"}>
				{store.lista_favorito.map(favorito => {
					return (
						<Dropdown.Item>
							<div className="input-group mb-3">
								<div className="input-group-append" href="#">{favorito}
									<button type="button" className="btn btn-outline-secondary dropdown-toggle-split"  onClick={() => {
										const isLargeNumber = (element) => element === favorito
										actions.deleteFav(store.lista_favorito.findIndex(isLargeNumber))
									}}><FaTrash />
									</button>
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