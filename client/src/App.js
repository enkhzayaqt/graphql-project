import HomePage from "./pages/home-page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="section">
      <Routes>
      <Route index path="/" element={<HomePage/>}/>

      </Routes>
    </main>
  );
}

export default App;
