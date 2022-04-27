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

    return <div className="container">
        <h1 className="title" style={{fontFamily:"fantasy", color:"yellow"}} >STARSHIPS FROM STAR WARS </h1>
        <hr className="line" style={{color: "yellow", marginRight:"20%", marginLeft:"20%"}}></hr> 
    <br />
    <div className="row justify-content-md-center">
        <div className="col-8">
            <img
                src="https://sm.ign.com/ign_es/screenshot/default/maxresdefault_3ddb.jpg"
                className="img-fluid"
                alt="..."
                width="640"
                height="360"
                border= "2px solid"
                style={{color: "gray", borderRadius:"10px"}}
            />
        </div>
        <div className="col-4 font-weight-bolder">
            <h2 style={{fontFamily:"fantasy", color:"#f4fd78", marginLeft:"40px"}}>{store.vehicle.name}</h2>
            
                <p>Model: {store.vehicle.model}</p>
                <p>Length: {store.vehicle.length}</p>
                <p>Passengers: {store.vehicle.passengers}</p>
                <p>Capacity: {store.vehicle.cargo_capacity}</p>
                <p>Consumables: {store.vehicle.consumables}</p>
                <p>Crew: {store.vehicle.crew}</p>
                <p>Created: {store.vehicle.created}</p>
                <p>Edited: {store.vehicle.edited}</p>
               
    
            
        </div>
    </div>
</div>

}
export default Vehicles;

