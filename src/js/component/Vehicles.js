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
        <h1>VEHICULOS STAR WARS </h1>
        {/* <img src="https://i2.wp.com/www.lafosadelrancor.com/wp-content/uploads/2019/10/91odEpqLBJL.jpg?resize=200%2C300&ssl=1" className="card-img-top" alt="..." /> */}
        <h1>Tamaño : {store.vehicle.length}</h1>
        <h1> Capacidad: {store.vehicle.passengers}</h1>
        <h1> Precio:  $ {store.vehicle.cost_in_credits}  Peso Chileno</h1>
    </div>
}
export default Vehicles;