import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPersonas()
		actions.getVehicles()
		actions.getPlanets()

	}, [])
	return <div className="container">
		<div className="row">
			{store.personas.map(people => <div key={people.uid} className="col-4">
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{people.name}</h5>
						<Link to={"/cards/people/" + people.uid} className="btn btn-primary">Further info here</Link>
						<button onClick={()=>{actions.addFav(people.name)}}>Fav</button>
					</div>
				</div>
			</div>)}
		</div>

		<div className="row">
			{store.vehicles.map(vehicle => <div key={vehicle.uid} className="col-4">
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{vehicle.name}</h5>
						<Link to={"/vehicles/" + vehicle.uid} className="btn btn-primary">Further info here</Link>
						<button onClick={()=>{actions.addFav(vehicle.name)}}>Fav</button>
					</div>
				</div>
			</div>)}
		</div>

		<div className="row">
			{store.planets.map(planet => <div key={planet.uid} className="col-4">
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{planet.name}</h5>
						<Link to={"/planets/" + planet.uid} className="btn btn-primary">Further info here</Link>
						<button onClick={()=>{actions.addFav(planet.name)}}>Fav</button>
					</div>
				</div>
			</div>)}
		</div>
	</div>
}

export default Home;