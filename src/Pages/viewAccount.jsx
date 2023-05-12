import Container from "../components/Container";
import { useState, useEffect } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import NavBar from "../components/navBar";


const ViewAcc = () => {
  const [savingsSearch, setSavingsSearch] = useState("");
  const [checkingSearch, setCheckingSearch] = useState("");
  const [checkingBalance, setCheckingBalance] = useState(0);
  const [savingsBalance, setSavingsBalance] = useState(0);
  const [savingsAccount, setSavingsAccount] = useState([]);
  const [checkingAccount, setCheckingAccount] = useState([]);

  const getCheckingAccount = async () => {
    try {
      const response = await fetch("https://mmjbank.herokuapp.com/accountlistchecking");
      const jsonData = await response.json();

      setCheckingAccount(jsonData);
      setCheckingBalance(jsonData[0]?.balance);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getSavingsAccount = async () => {
    try {
      const response = await fetch("https://mmjbank.herokuapp.com/accountlistsavings");
      const jsonData = await response.json();

      setSavingsAccount(jsonData);
      setSavingsBalance(jsonData[0]?.balance);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCheckingAccount();
    getSavingsAccount();
  }, []);

  const incrementSavingsAccount = async (e) => {
    e.preventDefault();
    try {
      const balance = savingsSearch;

      const body = { balance };
      const response = await fetch(
        `https://mmjbank.herokuapp.com/accountlistadd/${savingsAccount[0]?.account_id}`,

        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      setSavingsBalance(savingsBalance + balance);
    } catch (err) {
      console.error(err.message);
    }
  };

  const incrementCheckingAccount = async (e) => {
    e.preventDefault();
    try {
      const balance = checkingSearch;
      const body = { balance };
      const response = await fetch(
        `https://mmjbank.herokuapp.com/accountlistadd/${checkingAccount[0]?.account_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      setCheckingBalance(checkingBalance + balance);
    } catch (err) {
      console.error(err.message);
    }
  };

  const decrementSavingsAccount = async (e) => {
    e.preventDefault();
    try {
      const balance = savingsSearch;

      const body = { balance };
      const response = await fetch(
        `https://mmjbank.herokuapp.com/accountlistsubtract/${savingsAccount[0]?.account_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status == 200) {
        setSavingsBalance(savingsBalance - balance);
      } else if (response.status == 401) {
        alert("You do not Have Sufficient Funds for this Withdrawal.");
      } else if (response.status == 500) {
        alert("Server Error.");
      }
    } catch (err) {
      console.error(err.message);

      setSavingsBalance(savingsAccount[0]?.balance);
    }
  };

  const decrementCheckingAccount = async (e) => {
    e.preventDefault();
    try {
      const balance = checkingSearch;
      const body = { balance };
      const response = await fetch(
        `https://mmjbank.herokuapp.com/accountlistsubtract/${checkingAccount[0]?.account_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status == 200) {
        setCheckingBalance(checkingBalance - balance);
      } else if (response.status == 401) {
        alert("You do not Have Sufficient Funds for this Withdrawal.");
      } else if (response.status == 500) {
        alert("Server Error.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const savingsSearchHandler = (e) => {
    //function to set user's input
    setSavingsSearch(parseInt(e.target.value));
    if (isNaN(savingsSearch)) {
      //prevent NAN error
      setSearch(0);
    }
  };

  const checkingSearchHandler = (e) => {
    //function to set user's input
    setCheckingSearch(parseInt(e.target.value));
    if (isNaN(checkingSearch)) {
      //prevent NAN error
      setSearch(0);
    }
  };

  return (
    <Container>
        <NavBar />
      <div class="container">
        <h1 className="text-light text-center m-t 40 a">Accounts</h1>
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class=" card_back">
              <div class="container_card">
                <div class="card-body">
                  <h2 className="text-light text-center m-t 40 a">
                    Checking Account
                  </h2>
                  <p className="text-light text-center m-t 40 a">
                    Current Balance: {checkingBalance}{" "}
                  </p>

                  <div className="text-center">
                    <label className="m-r text-light">Amount:</label>
                    <div class="credit_input">
                      <input
                        className="acc"
                        name="pay-amt"
                        placeholder="0.00"
                        type="text"
                        onChange={checkingSearchHandler}
                        value={checkingSearch}
                      />
                    </div>

                    <button
                      class="btnAcc"
                      onClick={(e) => incrementCheckingAccount(e)}
                    >
                      {" "}
                      Deposit Money
                    </button>
                    <button
                      class="btnAcc"
                      onClick={(e) => decrementCheckingAccount(e)}
                    >
                      {" "}
                      Withdraw Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card_back">
              <div class="container_card">
                <div class="card-body">
                  <h2 className="text-light text-center m-t 40 a">
                    Savings Account
                  </h2>
                  <p className="text-light text-center m-t 40 a">
                    Current Balance: {savingsBalance}{" "}
                  </p>
                  <div className="text-center">
                    <label className="m-r text-light">Amount:</label>
                    <div class="credit_input">
                      <input
                        className="acc"
                        name="pay_amt"
                        placeholder="0.00"
                        onChange={savingsSearchHandler}
                        value={savingsSearch}
                      />
                    </div>

                    <button
                      class="btnAcc"
                      onClick={(e) => incrementSavingsAccount(e)}
                    >
                      {" "}
                      Deposit Money
                    </button>
                    <button
                      class="btnAcc"
                      onClick={(e) => decrementSavingsAccount(e)}
                    >
                      {" "}
                      Withdraw Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ViewAcc;
