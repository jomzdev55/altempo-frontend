import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingUp from "./Pages/SignUp";
import SignupStep1 from "./Pages/SignupStep1";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SingUp />} />
        <Route path="/step-1" element={<SignupStep1 />} />
      </Routes>
    </Router>
  );
};

export default App;
