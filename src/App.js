import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagePokemon from "./pages/PagePokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PagePokemon />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
