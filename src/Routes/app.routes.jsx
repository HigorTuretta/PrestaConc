import { Routes, Route } from "react-router-dom";


import { CadTrip } from "../Pages/CadTrip";
import { Home } from "../Pages/Home";
import { TripDetails } from "../Pages/TripDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CadTrip />} />
      <Route path="/details/:id" element={<TripDetails />} />
    </Routes>
  );
}
