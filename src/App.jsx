import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Container from "./components/Container"
import Login from "./Pages/logIn"
import MakePayment from "./Pages/makePayment"
import Settings from "./Pages/settings"
import TransferMoney from "./Pages/transferMoney"
import ViewAcc from "./Pages/viewAccount"
import ViewCredit from "./Pages/viewCredit"
import SavingsAccount from "./Pages/savingsAcc"
import CheckingAccount from "./Pages/checkingAcc"
import "./index.css"


function App() {
  
  return <>
  
      <Header />
      <Container>
          <Routes>
              <Route path="/logIn" element={<Login />}></Route>
              <Route path="/viewAccount" element={<ViewAcc />}></Route>
              <Route path="/viewCredit" element={<ViewCredit />}></Route>
              <Route path="/makePayment" element={<MakePayment />}></Route>
              <Route path="/transferMoney" element={<TransferMoney />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/checkingAcc" element={<CheckingAccount />}></Route>
              <Route path="/savingsAcc" element={<SavingsAccount />}></Route>

          </Routes>
      </Container>  

  </>
     
  }
  export default App