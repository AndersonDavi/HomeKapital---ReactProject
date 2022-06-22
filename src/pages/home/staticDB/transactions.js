import React from "react";
import Card from '../portfoliodoc/transaction__card';

function transactionList(){

    const cards = [
        {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2022-05-07",
        },
        {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2022-06-07",
        },
        {
            cardTitle:"$1,000,0132320.00",
            cardInfo:"Payment of Installment",
            date:"2022-06-07",
        },  {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2021-06-07",
        },  {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2021-03-07",
        },  {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2021-03-07",
        },  {
            cardTitle:"$1,000,000.00",
            cardInfo:"Payment of Installment",
            date:"2012-03-07",
        },
    ]



    const cardList = cards.map( card =>(<Card  cardTitle={card.cardTitle} cardInfo={card.cardInfo} date={card.date}/>))
    return (
    <div className="container-fluid">
           <div className="container-fluid p-3 d-flex justify-content-around">
               <div className="row w-50 p-2">
                    <label className="text-primary">Initial Date</label>
                    <input type="date" className=" border border-primary text-black border-0 border-bottom" id="date1"></input>
               </div>
               <div className="row w-50 p-2">
                    <label className="text-primary">Final Date</label>
                    <input type="date" className=" border border-primary text-black border-0 border-bottom" id="date2"></input>
               </div>
        </div>
           {cardList}
     </div>
    )
};



export default transactionList;
