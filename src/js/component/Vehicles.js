import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.getVehicle(params.id)
    }, [])

    // console.log(store.vehicle.model)//

    return <div>
        <h1>STARSHIPS FROM STAR WARS </h1>
        <img src="https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/05/star-wars-logo.jpg?fit=1280%2C720&quality=80&ssl=1" className="card-img-top2" alt="..." />
        <h6>Tamaño : {store.vehicle.length}</h6>
        <h6> Capacidad: {store.vehicle.passengers}</h6>
        <h6> Precio:  $ {store.vehicle.cost_in_credits}  Credits of Republic</h6>
    </div>
}
export default Vehicles;