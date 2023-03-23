import Container from "../components/Container";
import React from 'react';
import { useState } from "react";



const TransferMoney = () => {

    const [amtTransfer, setAmtTransfer] = useState("");
    const [checkingAccBalance, setcheckingAccBalance] = useState(1000);
    const [savingsAccBalance, setsavingsAccBalance] = useState(1000);
    const [toAccount, setToAccount] = useState("checking");
    const [select, setSelect] = useState("savings")

  
    const amtTransferHandler = (e) => {
        //function to set user's input
        setAmtTransfer(parseInt(e.target.value));
        if (isNaN(search)) {
            //prevent NAN error
            setSearch(0);
        }
    };


    const checkingAccTransfer = () => {

        setcheckingAccBalance(checkingAccBalance - amtTransfer);
        setsavingsAccBalance(savingsAccBalance + amtTransfer);

    }

    const savingsAccTransfer = () => {

        setsavingsAccBalance(savingsAccBalance - amtTransfer);
        setcheckingAccBalance(checkingAccBalance + amtTransfer);

    }


    function convertValue() {
        if(select == "checking") {
            checkingAccTransfer();
        } else if(select == "savings") {
            savingsAccTransfer();
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

                                    <h2 className = "text-light text-center m-t 40 a" >Checking Account Balance: {checkingAccBalance}</h2>


                                    <h2 className = "text-light text-center m-t 40 a" >Savings Account Balance: {savingsAccBalance}</h2>


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