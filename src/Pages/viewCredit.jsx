import Container from "../components/Container";
import React from 'react';
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import { useState, useEffect } from "react";
import NavBar from "../components/navBar";





const ViewCredit = () => {


    const [card1Search, setCard1Search] = useState("");
    const [card2Search, setCard2Search] = useState("");
    const [card1Balance, setCard1Balance] = useState(0);
    const [card2Balance, setCard2Balance] = useState(0);
    const [creditCard1, setCreditCard1] = useState([]);
    const [creditCard2, setCreditCard2] = useState([]);

    const getCreditCard1 = async () => {
        try {
          const response = await fetch("http://localhost:5000/creditcard1");
          const jsonData = await response.json();
    
          setCreditCard1(jsonData);
          setCard1Balance(jsonData[0]?.debt);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      const getCreditCard2 = async () => {
        try {
          const response = await fetch("http://localhost:5000/creditcard2");
          const jsonData = await response.json();
    
          setCreditCard2(jsonData);
          setCard2Balance(jsonData[0]?.debt);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getCreditCard1();
        getCreditCard2();
      }, []);



  const decrementCreditCard1 = async (e) => {
    e.preventDefault();
    try {
      const balance = card1Search;

      const body = { balance };
      const response = await fetch(
        `http://localhost:5000/creditcardsubtract/${creditCard1[0]?.credit_card_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status == 200) {
        setCard1Balance(card1Balance - balance);
      } else if (response.status == 401) {
        alert("You Must Only Pay up to Amount Owed.");
      } else if (response.status == 500) {
        alert("Server Error.");
      }
    } catch (err) {
      console.error(err.message);

      setCard1Balance(creditCard1[0]?.debt);
    }
  };

  const decrementCreditCard2 = async (e) => {
    e.preventDefault();
    try {
      const balance = card2Search;

      const body = { balance };
      const response = await fetch(
        `http://localhost:5000/creditcardsubtract/${creditCard2[0]?.credit_card_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status == 200) {
        setCard2Balance(card2Balance - balance);
      } else if (response.status == 401) {
        alert("You Must Only Pay up to Amount Owed.");
      } else if (response.status == 500) {
        alert("Server Error.");
      }
    } catch (err) {
      console.error(err.message);

      setCard2Balance(creditCard2[0]?.debt);
    }
  };

    const card2SearchHandler = (e) => {
        //function to set user's input
        setCard2Search(parseInt(e.target.value));
        if (isNaN(search)) {
            //prevent NAN error
            setSearch(0);
        }
    };

    const card1SearchHandler = (e) => {
        //function to set user's input
        setCard1Search(parseInt(e.target.value));
        if (isNaN(search)) {
            //prevent NAN error
            setSearch(0);
        }
    };

  

    return (<Container>
        <NavBar />

        <div class="container">
            <h1 className = "text-light text-center m-t 40 a" >Credit Cards</h1>
            <div class="row">
                <div class="col-lg-6 mb-4">
                   
                        <div class = " card_back">
                        <div class="container_card">
                        <img class="card-img-top y" src={card1} alt="" />

                        <div class="card-body">
                            <div className='text-center'>
                                <h1>Current Debt: ${card1Balance}</h1>

                                <label className="m-r">Amount to pay:</label>
                                <div class="credit_input">
                                    <input className="c" name="pay_amt" placeholder="0.00" onChange={card1SearchHandler}
                                            value={card1Search} />
                                </div>

                            </div>

                            <button className="y"   onClick={(e) => decrementCreditCard1(e)}> Pay Now</button>
                                  


                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="card_back"  >
                        <div class = "container_card">
                        <img class="card-img-top x" src={card2} alt="" />

                        <div class="card-body">
                            <div className='text-center'>
                                <h1>Current Debt: ${card2Balance}</h1>

                                <label className="m-r">Amount to pay:</label>
                                <div class="credit_input">
                                    <input className="c" name="pay_amt" placeholder="0.00" onChange={card2SearchHandler}
                                            value={card2Search} />
                                </div>

                            </div>

                            <button className="y" onClick={(e) => decrementCreditCard2(e)}> Pay Now</button>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Container>)
}

export default ViewCredit;