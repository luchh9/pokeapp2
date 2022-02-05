import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = (props) => {
  const [busqueda, Setbusqueda] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    Setbusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pokemon/" + busqueda);
  };

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <button type="submit"></button>
        <input
          name="busqueda"
          type="text"
          id="buscar"
          value={busqueda}
          placeholder="Busca un Pokemon"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Navbar;
