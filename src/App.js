import React from 'react';
import './App.css';
import Home from './components/Home';
import Reviewme from './components/Reviewme';
import UpdateContactInfo from './components/UpdateContactInfo';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Navbartop } from './components/Navbartop';


function RoutesComponent() {
  // Define your routes here
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "reviewme", element: <Reviewme /> },
    { path: "updatecontact", element: <UpdateContactInfo /> }
  ]);

  return routes;
}

function App() {
  return (
    <>
      <Navbartop />
      <div className="App">
        <Router>

          <RoutesComponent />

        </Router>
      </div>
    </>

  );
}

export default App;
