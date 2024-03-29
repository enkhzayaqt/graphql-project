import { useState } from "react";
import HomePage from "./pages/home-page";
import JobPage from "./pages/job-page";
import LoginPage from "./pages/login-page";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import CreateJobPage from "./pages/create-job-page";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  return (
    <>
    <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
    <main className="section">
      <Routes>
      <Route index path="/" element={<HomePage/>}/>
      <Route index path="/jobs/new" element={<CreateJobPage/>}/>
      <Route index path="/jobs/:jobId" element={<JobPage/>}/>
      <Route index path="/login" element={<LoginPage setLoggedUser={setLoggedUser}/>}/>
      </Routes>
    </main>
    </>
    
  );
}

export default App;
