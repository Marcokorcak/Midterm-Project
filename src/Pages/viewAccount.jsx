import Container from "../components/Container";
import { useState } from "react";
import { NavLink as RouterLink } from 'react-router-dom';




const ViewAcc = () => {

    const [savingsSearch, setSavingsSearch] = useState("");
    const [checkingSearch, setCheckingSearch] = useState("");
    const [checkingBalance, setCheckingBalance] = useState(0);
    const [savingsBalance, setSavingsBalance] = useState(0);



    const savingsSearchHandler = (e) => {
        //function to set user's input
        setSavingsSearch(parseInt(e.target.value));
        if (isNaN(search)) {
            //prevent NAN error
            setSearch(0);
        }
    };

    const checkingSearchHandler = (e) => {
        //function to set user's input
        setCheckingSearch(parseInt(e.target.value));
        if (isNaN(search)) {
            //prevent NAN error
            setSearch(0);
        }
    };



    const depositCheckingMoney = () => {

        setCheckingBalance(checkingBalance + checkingSearch);

    }

    const withdrawSavingsMoney = () => {

        setSavingsBalance(savingsBalance - savingsSearch);

    }

    const withdrawCheckingMoney = () => {
        setCheckingBalance(checkingBalance - checkingSearch);


    }

    const depositSavingsMoney = () => {
        setSavingsBalance(savingsBalance + savingsSearch);

    }





    return (<Container>
        <div class="container">
            <h1 className="text-light text-center m-t 40 a" >Accounts</h1>
            <div class="row">
                <div class="col-lg-6 mb-4">

                    <div class=" card_back">
                        <div class="container_card">

                            <div class="card-body">
                                <h2 className="text-light text-center m-t 40 a" >Checking Account</h2>
                                <p className="text-light text-center m-t 40 a" >Current Balance: {checkingBalance} </p>

                                <div className='text-center'>
                                    <label className="m-r text-light">Amount:</label>
                                    <div class="credit_input">
                                        <input className="acc" name="pay-amt" placeholder="0.00" type="text"

                                            onChange={checkingSearchHandler}
                                            value={checkingSearch} />
                                    </div>


                                    <button class="btnAcc" onClick = {depositCheckingMoney}> Deposit Money</button>
                                    <button class="btnAcc" onClick = {withdrawCheckingMoney}> Withdraw Money</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="card_back"  >
                        <div class="container_card">

                            <div class="card-body">
                                <h2 className="text-light text-center m-t 40 a" >Savings Account</h2>
                                <p className="text-light text-center m-t 40 a" >Current Balance: {savingsBalance} </p>
                                <div className='text-center'>

                                    <label className="m-r text-light">Amount:</label>
                                    <div class="credit_input">
                                        <input className="acc" name="pay_amt" placeholder="0.00"
                                            onChange={savingsSearchHandler}
                                            value={savingsSearch}  />
                                    </div>

                                    <button class="btnAcc" onClick = {depositSavingsMoney}> Deposit Money</button>
                                    <button class="btnAcc" onClick = {withdrawSavingsMoney}> Withdraw Money</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </Container>)
}

export default ViewAcc;