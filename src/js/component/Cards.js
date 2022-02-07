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
        <h1>PERSONAJES STAR WARS</h1>
    <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className="card-img-top" alt="..." /> 
    <h1>Nombre :{store.people.name}</h1>
    <h1> Altura: {store.people.height}</h1>
    <h1>Gender: {store.people.gender}</h1>
    
    </div> 
    
}

export default Cards;