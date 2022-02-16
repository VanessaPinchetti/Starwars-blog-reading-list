import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const Cards = () => {
    const { store, actions} = useContext(Context);
    const params = useParams();
    useEffect(() => {
		actions.getPeople(params.id)
	}, [])
    console.log(store.people.name)

    return <div>
        <h1>CHARACTER OF STAR WARS</h1>
    <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top2" alt="..." /> 
    <h6>Nombre :{store.people.name}</h6>
    <h6> Altura: {store.people.height}</h6>
    <h6>Gender: {store.people.gender}</h6>
    </div> 
    
}

export default Cards;