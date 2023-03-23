import { BrowserRouter as Router, Routes, Route } from "react-router-dom" //using this for routing 
import Login from "./Pages/logIn"
import Settings from "./Pages/settings"
import TransferMoney from "./Pages/transferMoney"
import ViewAcc from "./Pages/viewAccount"
import ViewCredit from "./Pages/viewCredit"
import "./index.css"
import NavBar from "./components/navBar"
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {

  return (
    <div className="App">
      <NavBar />

      <Router>
        <Routes>
          <Route exact path="/logIn" element={<Login />} />
          <Route exact path="/viewAccount" element={<ViewAcc />} />
          <Route exact path="/viewCredit" element={<ViewCredit />} />
          <Route exact path="/transferMoney" element={<TransferMoney />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>


  )

}
export default App


/*   <Route path="/logIn" element={<Login />}></Route>
  <Route path="/viewAccount" element={<ViewAcc />}></Route>
  <Route path="/viewCredit" element={<ViewCredit />}></Route>
  <Route path="/makePayment" element={<MakePayment />}></Route>
  <Route path="/transferMoney" element={<TransferMoney />}></Route>
  <Route path="/settings" element={<Settings />}></Route>
  <Route path="/checkingAcc" element={<CheckingAccount />}></Route>
  <Route path="/savingsAcc" element={<SavingsAccount />}></Route> */