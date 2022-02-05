import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Pokemon from "../components/Pokemon";

const PagePokemon = (props) => {
  const [busqueda, Setbusqueda] = useState();
  let params = useParams();

  useEffect(() => {
    Setbusqueda(params.name);
  }, [params.name]);
  return (
    <>
      {/* Navbar cambia el params al realizar el submit, PagePokemon capta los parametros y actualiza su estado al notar cambios en estos,
     y se los pasa a <pokemon/> */}
      <Navbar />
      <Pokemon name={busqueda} />
    </>
  );
};

export default PagePokemon;
