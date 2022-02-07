const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			personas: [],
			vehicle: [],
			vehicles: [],
			planet: [],
			planets: [],
			favorito: [],
			lista_favorito: [],
		},
		actions: {

			addFav: favorite => {
				const store = getStore();
				if (store.lista_favorito.includes(favorite)){
					return console.log("Ya existe este favorito")
				}
				setStore({ lista_favorito: [...store.lista_favorito, favorite] })
				return console.log(store.lista_favorito)
			},
			deleteFav: (index) => {
				const store = getStore()
				store.lista_favorito.splice(index, 1)
				setStore({lista_favorito:store.lista_favorito})
			},
			getPeople: id => {
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(response => response.json())
					.then((result) => {
						setStore({ people: result.result.properties });

					})
					.catch(error => console.log("Error", error));
			},
			getPersonas: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response =>
						response.json())
					.then(data => setStore({ personas: data.results }));
			},
			getVehicle: (id) => {
				fetch("https://www.swapi.tech/api/vehicles/" + id)
					.then(response => response.json())
					.then((data) => {
						setStore({ vehicle: data.result.properties });
					})
					.catch(error => console.log("Error", error));
			},
			getVehicles: (id) => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response =>
						response.json())
					.then(data =>
						setStore({ vehicles: data.results }))
					.catch(error => console.log("Error", error));

			},
			getPlanet: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(response => response.json())
					.then((data) => {
						setStore({ planet: data.result.properties })
					});
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response =>
						response.json())
					.then(data => setStore({ planets: data.results }));
			},
		}
	};
};

export default getState;
