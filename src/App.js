import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ProductContainer } from './ProductContainer';

const home = <h1>Home</h1>;

function App(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src="images/logo.svg" alt="" width="30" height="24" className='m-1'/>
              SMV
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/bedroom" className="nav-link">Bed Room</Link>
                </li>
                <li className="nav-item">
                    <Link to="/kitchen" className="nav-link">Kitchen</Link>
                </li>
                <li className="nav-item">
                    <Link to="/poojaroom" className="nav-link">Pooja Room</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tv" className="nav-link">TV</Link>
                </li>
                <li className="nav-item">
                    <Link to="/wardrobe" className="nav-link">Wardrobe</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <Routes>
            <Route path="/" element={home} />
            <Route path="/bedroom" element={<ProductContainer productType="bedroom" />} />
            <Route path="/kitchen" element={<ProductContainer productType="kitchen" /> } />
            <Route path="/poojaroom" element={<ProductContainer productType="poojaroom" />} />
            <Route path="/tv" element={<ProductContainer productType="tv" />} />
            <Route path="/wardrobe" element={<ProductContainer productType="wardrobe" />} />
        </Routes>
        </>
    );
}

export default App;