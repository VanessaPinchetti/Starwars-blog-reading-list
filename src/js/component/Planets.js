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
   <h1>PLANETS FROM STAR WARS</h1>
<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top2" alt="..." /> 
<h5>Nombre :{store.planet.name}</h5>
<h5>Tamaño: {store.planet.diameter}</h5>
<h5>Rotacion: {store.planet.rotation_period}</h5>

</div>
}

export default Planets;