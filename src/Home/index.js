import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";


function Home(){
    return(
        <div className=" text-center mt-5">
            <h1>Home admin</h1>
            <Link to="/orders/saved">
                <button className="btn btn-primary m-4 p-4">Commandes enregistrées</button>
            </Link>
            
            <Link to="/orders/validated">
                <button className="btn btn-primary m-4 p-4">Commandes validées</button>
            </Link>

            <Link to="/orders/shipped">
                <button className="btn btn-primary m-4 p-4">Commandes expédiées</button>
            </Link>

            <Link to="/orders/delivered">
                <button className="btn btn-primary m-4 p-4">Commandes livrées</button>
            </Link>
        </div>
    );
}

export default Home;