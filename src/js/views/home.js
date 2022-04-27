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
			<h1 style={{color:"yellow", fontFamily:"fantasy", fontSize:"xx-large"}}>CHARACTERS</h1>
			<div className="overflow-auto">
				<div className="row1">
					{store.personas.map(people => <div key={people.uid} className="col-4">
						<div className="card col-6 mb-5 m-4 p-3" style={{ width: "18rem" }}>
							<img src="https://i2.wp.com/www.lafosadelrancor.com/wp-content/uploads/2021/02/luke-retorno-de-jedi-lista-cortada_widelg.jpg?resize=678%2C381&ssl=1" className="card-img-top" alt="..." 
							style={{ width: "100%", height: "250px" }} 
							/>
							<div className="card-body">
								<h5 className="card-title">{people.name}</h5>
							
								<Link to={"/cards/people/" + people.uid} className="btn btn-dark">Learn More</Link>  {" "}
								<button className={`btn btn-danger`} onClick={() => { actions.addFav(people.name) }}>
									 <i className="fas fa-heart"></i> 
								</button>
								
							</div>
						</div>
					</div>)}
				</div>
			</div>
		</div>

		<div className="container">
			<h1 style={{color:"yellow", fontFamily:"fantasy", fontSize:"xx-large"}}>STARSHIPS</h1>
			<div className="overflow-auto">
				<div className="row1">
					{store.vehicles.map(vehicle => <div key={vehicle.uid} className="col-4">
					<div className="card col-6 mb-5 m-4 p-3" style={{ width: "18rem" }}>
							<img src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg" className="card-img-top" alt="..." 
							style={{ width: "100%", height: "250px" }} 
							/>
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>
							
								<Link to={"/vehicles/" + vehicle.uid} className="btn btn-dark">Learn More</Link>  {" "}
								<button className={`btn btn-danger`} onClick={() => { actions.addFav(vehicle.name) }}>
								<i className="fas fa-heart"></i> 
								</button>
							</div>
						</div>
					</div>)}
				</div>
			</div>
		</div>

		<div className="container">
			<h1 style={{color:"yellow", fontFamily:"fantasy", fontSize:"xx-large"}}>PLANETS</h1>
			<div className="overflow-auto">
				<div className="row1">
					{store.planets.map(planet => <div key={planet.uid} className="col-4">
					<div className="card col-6 mb-5 m-4 p-3" style={{ width: "18rem" }}>
							<img src="https://static2.abc.es/media/201201/19/Star_Wars--644x450.jpg" className="card-img-top" alt="..." 
							style={{ width: "100%", height: "250px" }} 
							/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								{/* <h6> Population: {planet.population}</h6>
                                <h6> Terrain: {planet.terrain}</h6>  */}
								<Link to={"/planets/" + planet.uid} className="btn btn-dark">Learn More</Link>  {" "}
								<button className={`btn btn-danger`} onClick={() => { actions.addFav(planet.name) }}>
								<i className="fas fa-heart"></i> 
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