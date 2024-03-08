import HomePage from "./pages/home-page";
import JobPage from "./pages/job-page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="section">
      <Routes>
      <Route index path="/" element={<HomePage/>}/>
      <Route index path="/jobs/:jobId" element={<JobPage/>}/>

      </Routes>
    </main>
  );
}

export default App;
