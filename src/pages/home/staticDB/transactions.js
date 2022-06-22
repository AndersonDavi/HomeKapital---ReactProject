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
           {cardList}
     </div>
    )
};



export default transactionList;