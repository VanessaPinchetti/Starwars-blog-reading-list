import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const Planets = () => {
    const { store, actions} = useContext(Context);
    const params = useParams();
    useEffect(() => {
		actions.getPlanet(params.id)
	}, [])
   console.log(store.planet.name)


   return <div>
   <h1>PLANETS STAR WARS</h1>
<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top" alt="..." /> 
<h1>Nombre :{store.planet.name}</h1>
<h1>Tamaño: {store.planet.diameter}</h1>
<h1>Rotacion: {store.planet.rotation_period}</h1>

</div>
}

export default Planets;