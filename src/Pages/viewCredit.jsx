import Container from "../components/Container";
import React from 'react';
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import { useState } from "react";




const ViewCredit = () => {


    const [card1Search, setCard1Search] = useState("");
    const [card2Search, setCard2Search] = useState("");
    const [card1Balance, setCard1Balance] = useState(1000);
    const [card2Balance, setCard2Balance] = useState(1000);

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

    const card1Pay = () => {

        setCard1Balance(card1Balance - card1Search);

    }

    const card2Pay = () => {

        setCard2Balance(card2Balance - card2Search);

    }

    return (<Container>

        <div class="container">
            <h1 className = "text-light text-center m-t 40 a" >Credit Cards</h1>
            <div class="row">
                <div class="col-lg-6 mb-4">
                   
                        <div class = " card_back">
                        <div class="container_card">
                        <img class="card-img-top y" src={card2} alt="" />

                        <div class="card-body">
                            <div className='text-center'>
                                <h1>Current Debt: ${card2Balance}</h1>

                                <label className="m-r">Amount to pay:</label>
                                <div class="credit_input">
                                    <input className="c" name="pay_amt" placeholder="0.00" onChange={card2SearchHandler}
                                            value={card2Search} />
                                </div>

                            </div>

                            <button className="y" onClick = {card2Pay}> Pay Now</button>
                                  


                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="card_back"  >
                        <div class = "container_card">
                        <img class="card-img-top x" src={card1} alt="" />

                        <div class="card-body">
                            <div className='text-center'>
                                <h1>Current Debt: ${card1Balance}</h1>

                                <label className="m-r">Amount to pay:</label>
                                <div class="credit_input">
                                    <input className="c" name="pay_amt" placeholder="0.00" onChange={card1SearchHandler}
                                            value={card1Search} />
                                </div>

                            </div>

                            <button className="y" onClick = {card1Pay}> Pay Now</button>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Container>)
}

export default ViewCredit;