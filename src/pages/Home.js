import React from "react";
import { useState } from "react";
import "./Home.css";
import pokebola from "../pokebola.png";
import searchicon from "../search_icon.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [busqueda, Setbusqueda] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pokemon/" + busqueda);
  };

  const handleChange = (e) => {
    Setbusqueda(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="centrado">
        <form
          className="home-search centrar"
          onSubmit={handleSubmit}
          name="Form"
        >
          <img className="logo rotate-center" src={pokebola} alt="pokebola" />
          <div class="input-group mb-3">
            <div className="input-group-prepend ">
              <button className="button-search" type="submit">
                <img className="search-icon" src={searchicon} alt="" />
              </button>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Busca un Pokemon!"
              aria-label=""
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
