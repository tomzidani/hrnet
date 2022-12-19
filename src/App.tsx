import { Routes, Route } from "react-router-dom"

import { Home, NotFound } from "@views"

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
