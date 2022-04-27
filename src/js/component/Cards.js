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

    return<div className="container">
        <h1 className="title" style={{fontFamily:"fantasy", color:"yellow"}} >CHARACTERS FROM STAR WARS </h1>
        <hr className="line" style={{color: "yellow", marginRight:"20%", marginLeft:"20%"}}></hr> 
        
    <br />
    <div className="row justify-content-md-center">
        <div className="col-8">
            <img
                src="https://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_800x.jpg?v=1616087475"
                className="img-fluid"
                alt="..."
                width="640"
                height="360"
                border= "2px solid"
                style={{color: "gray", borderRadius:"10px"}}
            />
        </div>
        <div className="col-4 font-weight-bolder">
            <h2 style={{fontFamily:"fantasy", color:"#f4fd78", marginLeft:"40px"}}>{store.people.name}</h2>
           
                <p>Height: {store.people.height}</p>
                <p>Mass: {store.people.mass}</p>
                <p>Heir: {store.people.heir}</p>
                <p>Skin Color: {store.people.skin_color}</p>
                <p>Eye Color: {store.people.eye_color}</p>
                <p>Birth year: {store.people.birth_year}</p>
                <p>Gender: {store.people.gender}</p>
                <p>Created: {store.people.created}</p>
                <p>Edited: {store.people.edited}</p>
    
            
        </div>
    </div>
</div>




}

export default Cards;


