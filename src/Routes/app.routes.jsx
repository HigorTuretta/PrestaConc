import { Routes, Route } from "react-router-dom";

import { CadTrip } from "../pages/CadTrip";
import { Home } from "../pages/Home";
import { TripDetails } from "../pages/TripDetails";
import { Contact } from "../pages/Contact";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CadTrip />} />
      <Route path="/details/:id" element={<TripDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
