import { React, useState, useEffect } from "react";

const Pokemon = (props) => {
  const [info, setInfo] = useState({});
  const [img, setImg] = useState("");

  let pokemon = props.name;

  // llamada api

  const fetchData = async (name) => {
    console.log("realizando el fetch a", name);
    let url = "https://pokeapi.co/api/v2/pokemon/" + name;
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);
    setImg(data.sprites.other["official-artwork"].front_default);
  };

  useEffect(() => {
    // let pokemon = props.name;
    fetchData(pokemon);
  }, [pokemon]);

  return (
    <>
      <h1>este el es pokemon {props.name}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>types</h2>
          </div>
          <div className="col-md-6">
            <img src={img} alt="pokemon image" />
          </div>
          <div className="col-md-3">
            <h2>stats</h2>
          </div>
        </div>
      </div>
      <li>{info?.base_experience}</li>
      <li>{info?.weight}</li>
    </>
  );
};

export default Pokemon;
