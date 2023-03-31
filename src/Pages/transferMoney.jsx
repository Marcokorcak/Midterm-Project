import Container from "../components/Container";
import React from 'react';
import { useState, useEffect} from "react";
import NavBar from "../components/navBar";




const TransferMoney = () => {

    const [amtTransfer, setAmtTransfer] = useState("");
    const [checkingBalance, setCheckingBalance] = useState(1000);
    const [savingsBalance, setSavingsBalance] = useState(1000);
    const [toAccount, setToAccount] = useState("checking");
    const [select, setSelect] = useState("savings")
    const [savingsAccount, setSavingsAccount] = useState([]);
    const [checkingAccount, setCheckingAccount] = useState([]);
  

    const getCheckingAccount = async () => {
        try {
          const response = await fetch("http://localhost:5000/accountlistchecking");
          const jsonData = await response.json();
    
          setCheckingAccount(jsonData);
          setCheckingBalance(jsonData[0]?.balance);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      const getSavingsAccount = async () => {
        try {
          const response = await fetch("http://localhost:5000/accountlistsavings");
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
          const balance = amtTransfer;
    
          const body = { balance };
          const response = await fetch(
            `http://localhost:5000/accountlistadd/${savingsAccount[0]?.account_id}`,
    
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
          const balance = amtTransfer;
          const body = { balance };
          const response = await fetch(
            `http://localhost:5000/accountlistadd/${checkingAccount[0]?.account_id}`,
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
          const balance = amtTransfer;
    
          const body = { balance };
          const response = await fetch(
            `http://localhost:5000/accountlistsubtract/${savingsAccount[0]?.account_id}`,
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
          const balance = amtTransfer;
          const body = { balance };
          const response = await fetch(
            `http://localhost:5000/accountlistsubtract/${checkingAccount[0]?.account_id}`,
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

    const amtTransferHandler = (e) => {
        //function to set user's input
        setAmtTransfer(parseInt(e.target.value));
        if (isNaN(amtTransfer)) {
            // NAN error
            setAmtTransfer(0);
        }


    };

console.log(amtTransfer);
    const checkingAccTransfer = (e) => {

        decrementCheckingAccount(e);
        incrementSavingsAccount(e);
      

    }

    const savingsAccTransfer = (e) => {

    decrementSavingsAccount(e);
    incrementCheckingAccount(e);

    }


    function convertValue(e) {
        if(select == "checking") {
            checkingAccTransfer(e);
        } else if(select == "savings") {
            savingsAccTransfer(e);
    }
}

    function getAcc() {
        if(select == "checking") {
            setToAccount("checking")
        } else if(select == "savings") {
            setToAccount("savings")
        }
    }

    const selectHandler = (e) => {
        setSelect(e.target.value);

        getAcc();
    }
    


    




    return (<Container>
        <NavBar />
       
       <div class="container">
            <h1 className = "text-light text-center m-t 40 a" >Transfer Money</h1>
            <div class="row">
                <div class="col-lg-6 mb-4">
                   
                        <div class = "card_back">
                        <div class="container_card_a">

                        <div class="card-body">
                            <div className='text-center'>
                                <h1>Choose an account to transfer from:</h1>
                                <select id ="selectbox" className="mb-2" onChange={selectHandler} value = {select}>
                                 <option value = "default">-Select-</option>
                                 <option value = "checking">Checking Acc</option>
                                 <option value = "savings">Savings Acc</option>
            </select>
            <h2>Transferring to: {toAccount}</h2>

            <div className='text-center'>
                                    <label className="m-r text-light">Amount:</label>
                                    <div class="credit_input">
                                        <input className="acc" name="pay-amt" placeholder="0.00" type="text"

                                            onChange={amtTransferHandler}
                                            value={amtTransfer} />
                                    </div>


                                    <button class="btnAcc" onClick = {convertValue}> Transfer</button>

                                    <h2 className = "text-light text-center m-t 40 a" >Checking Account Balance: {checkingBalance}</h2>


                                    <h2 className = "text-light text-center m-t 40 a" >Savings Account Balance: {savingsBalance}</h2>


                                </div>
            
                              

                            </div>

                                  


                        </div>
                    </div>
                    </div>
                </div>
            
            </div>
        </div>
    </Container>)
}


export default TransferMoney;