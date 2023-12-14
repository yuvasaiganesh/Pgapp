import { Routes, Route } from "react-router-dom";

import Login from "./components/login";

import Pgnames from "./components/Pgs";
import Details from "./components/Details";

import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css"

function App() {
  return (
    <Routes>
      
      <Route exact path="/" element={<ProtectedRoute />}>
        <Route exact path="/" element={<Pgnames />} />
      </Route>
       
      <Route exact path="/details" element={<ProtectedRoute />}>
        <Route exact path="/details" element={<Details/>} />
      </Route>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
