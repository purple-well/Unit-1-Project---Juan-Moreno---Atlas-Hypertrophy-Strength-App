import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GeneratorPage from "./pages/GeneratorPage";

//Defines routes for the app's home page and wokrout generator page.
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/generate" element={<GeneratorPage />} />
    </Routes>
  );
}

export default App;