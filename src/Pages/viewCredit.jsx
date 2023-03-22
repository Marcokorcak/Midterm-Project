import Container from "../components/Container";
import React from 'react';
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";




const ViewCredit = () => {

    const debt = 1000;

    const payBalance = () => {

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
                                <h1>Current Debt: ${debt}</h1>

                                <label className="m-r">Amount to pay:</label>
                                <div class="credit_input">
                                    <input className="c" name="pay_amt" placeholder="0.00" />
                                </div>

                            </div>

                            <button className="y"> Pay Now</button>

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
                                <h1>Current Debt: ${debt}</h1>

                                <label className="m-r">Amount to pay:</label>
                                <div class="credit_input">
                                    <input className="c" name="pay_amt" placeholder="0.00" />
                                </div>

                            </div>

                            <button className="y"> Pay Now</button>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Container>)
}

export default ViewCredit;