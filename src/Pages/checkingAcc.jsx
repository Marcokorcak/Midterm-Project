import Container from "../components/Container";
import React from 'react';



const CheckingAccount = () => {

    const value = 10000;

    return (<Container>
      <div className="every">
        
        <p>{value}</p>

        <div className="card" >
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card" >
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

        
        </div>
    </Container>)
}

export default CheckingAccount;


