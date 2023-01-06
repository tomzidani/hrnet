import { Routes, Route } from "react-router-dom"

import { Employees, Home, NotFound } from "@views"

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/employes" element={<Employees />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
