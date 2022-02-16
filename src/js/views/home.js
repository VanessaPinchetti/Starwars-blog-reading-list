import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';
import { useParams } from "react-router-dom";

const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPersonas()
		actions.getPeople(params.id)
		actions.getVehicles()
		actions.getPlanets()

	}, [])

	console.log(store.people.name)

	return <div>
		<div className="container">
			<h1 className="color">Characters</h1>
			<div className="overflow-auto">
				<div className="row1">
					{store.personas.map(people => <div key={people.uid} className="col-4">
						<div className="card d-inline-block m-3" style={{ width: "16rem" }}>
							<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{people.name}</h5>
								<h6> Gender: {people.gender}</h6>
								<h6> Hair Color: {people.hair_color}</h6>
								<h6> Eye Color: {people.eye_color}</h6>
								<Link to={"/cards/people/" + people.uid} className="btn btn-primary">Learn more!</Link>  {" "}
								<button className={`btn btn-outline-warning`} onClick={() => { actions.addFav(people.name) }}>
									<AiOutlineHeart />
								</button>
							</div>
						</div>
					</div>)}
				</div>
			</div>
		</div>

		<div className="container">
			<h1 className="color">StarShips</h1>
			<div className="overflow-auto">
				<div className="row1">
					{store.vehicles.map(vehicle => <div key={vehicle.uid} className="col-4">
					<div className="card d-inline-block m-3" style={{ width: "16rem" }}>
							<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>
								<h6> Starships Class: {vehicle.starship_class}</h6>
                                <h6>  Model: {vehicle.model}</h6>
								<Link to={"/vehicles/" + vehicle.uid} className="btn btn-primary">Learn more!</Link>  {" "}
								<button className={`btn btn-outline-warning`} onClick={() => { actions.addFav(vehicle.name) }}>
									<AiOutlineHeart />
								</button>
							</div>
						</div>
					</div>)}
				</div>
			</div>
		</div>

		<div className="container">
			<h1 className="color">Planets</h1>
			<div className="overflow-auto">
				<div className="row1">
					{store.planets.map(planet => <div key={planet.uid} className="col-4">
					<div className="card d-inline-block m-3" style={{ width: "16rem" }}>
							<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<h6> Population: {planet.population}</h6>
                                <h6> Terrain: {planet.terrain}</h6>
								<Link to={"/planets/" + planet.uid} className="btn btn-primary">Learn more!</Link>  {" "}
								<button className={`btn btn-outline-warning`} onClick={() => { actions.addFav(planet.name) }}>
									<AiOutlineHeart />
								</button>
							</div>
						</div>
					</div>)}
				</div>
			</div>
		</div>
	</div>
}

export default Home;