import Container from "../components/Container";
import { useState, useEffect} from "react";
import { NavLink as RouterLink } from 'react-router-dom';




const ViewAcc = () => {

    const [savingsSearch, setSavingsSearch] = useState("");
    const [checkingSearch, setCheckingSearch] = useState("");
    const [checkingBalance, setCheckingBalance] = useState(0);
    const [savingsBalance, setSavingsBalance] = useState(0);
    const [savingsAccount, setSavingsAccount] = useState([]);
    const [checkingAccount, setCheckingAccount] = useState([]);



    const getCheckingAccount = async () => {
        try {
            const response = await fetch("http://localhost:5000/accountlistchecking")
            const jsonData = await response.json()
            
            setCheckingAccount(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    const getSavingsAccount = async () => {
        try {
            const response = await fetch("http://localhost:5000/accountlistsavings")
            const jsonData = await response.json()
            
            setSavingsAccount(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }


    useEffect(() => {
        getCheckingAccount();  
        getSavingsAccount();
    }, []);



    const incrementSavingsAccount = async e => {
        e.preventDefault();
        try{ 

            const body = {savingsSearch};
            const response = await fetch(`http://localhost:5000/accountlist${savingsAccount[0]?.account_id}`, 
            {
            method: "PUT" ,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })


        }catch (err) {
            console.error(err.message);
        }

    }

    const incrementCheckingAccount = async e => {
        e.preventDefault();
        try{ 

            const body = {checkingSearch};
            const response = await fetch(`http://localhost:5000/accountlist${checkingAccount[0]?.account_id}`, 
            {
            method: "PUT" ,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

     

        }catch (err) {
            console.error(err.message);
        }

    }


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
                                <p className="text-light text-center m-t 40 a" >Current Balance: {checkingAccount[0]?.balance} </p>

                                <div className='text-center'>
                                    <label className="m-r text-light">Amount:</label>
                                    <div class="credit_input">
                                        <input className="acc" name="pay-amt" placeholder="0.00" type="text"

                                            onChange={checkingSearchHandler}
                                            value={checkingSearch} />
                                    </div>


                                    <button class="btnAcc" onClick = {e => incrementCheckingAccount(e)}> Deposit Money</button>
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
                                <p className="text-light text-center m-t 40 a" >Current Balance: {savingsAccount[0]?.balance} </p>
                                <div className='text-center'>

                                    <label className="m-r text-light">Amount:</label>
                                    <div class="credit_input">
                                        <input className="acc" name="pay_amt" placeholder="0.00"
                                            onChange={savingsSearchHandler}
                                            value={savingsSearch}  />
                                    </div>

                                    <button class="btnAcc" onClick = {e => incrementSavingsAccount(e)}> Deposit Money</button>
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