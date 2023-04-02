import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //using this for routing
import Login from "./Pages/logIn";
import Settings from "./Pages/settings";
import TransferMoney from "./Pages/transferMoney";
import ViewAcc from "./Pages/viewAccount";
import ViewCredit from "./Pages/viewCredit";
import Signup from "./Pages/signup";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/viewAccount" element={<ViewAcc />} />
          <Route exact path="/viewCredit" element={<ViewCredit />} />
          <Route exact path="/transferMoney" element={<TransferMoney />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

