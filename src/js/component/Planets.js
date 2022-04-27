import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPlanet(params.id);
  }, []);
  console.log(store.planet.name);

  return<div className="container">
   <h1 className="title" style={{fontFamily:"fantasy", color:"yellow"}} >PLANETS FROM STAR WARS </h1>
        <hr className="line" style={{color: "yellow", marginRight:"20%", marginLeft:"20%"}}></hr> 
<br />
<div className="row justify-content-md-center">
  <div className="col-8">
      <img
          src="https://rollingstone.uol.com.br/media/_versions/star-wars-death-star-earth_1_widelg.jpg"
          className="img-fluid"
          alt="..."
          width="640"
          height="360"
          border= "2px solid"
          style={{color: "gray", borderRadius:"10px"}}
      />
  </div>
  <div className="col-4 font-weight-bolder" >
      <h2 style={{fontFamily:"fantasy", color:"#f4fd78", marginLeft:"40px"}}>{store.planet.name}</h2>
      
          <p>Rotation Period: {store.planet.rotation_period}</p>
          <p>Orbital Period: {store.planet.orbital_period}</p>
          <p>Diameter: {store.planet.diameter}</p>
          <p>Climate: {store.planet.climate}</p>
          <p>Gravity: {store.planet.gravity}</p>
          <p>Terrain: {store.planet.terrain}</p>
          <p>Surface Water: {store.planet.surface_water}</p>
          <p>Population: {store.planet.population}</p>
         

      
  </div>
</div>
</div>
}

export default Planets;


{/* <div>
<h1>PLANETS FROM STAR WARS</h1>
<img
  src="https://assets.adnradio.cl/2021/11/Star-Wars-Logo-e1637342476601-925x470.jpg"
  className="img-fluid"
  alt="..."
  width="640"
  height="360"
  border="2px solid"
  style={{ color: "gray" }}
/>
<h5>Nombre :{store.planet.name}</h5>
<h5>Tamaño: {store.planet.diameter}</h5>
<h5>Rotacion: {store.planet.rotation_period}</h5>
</div> */}