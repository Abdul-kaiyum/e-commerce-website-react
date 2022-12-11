import React from "react";
import FlashCards from './FlashCards';


const FlashDeals = ({productItems}) =>{
    return(
        <>
        <section className="flash background">
            <div className="container">
                   <div className="heading f_flex">
                    <i className="fa fa-bolt">

                    </i>
                    <h1>Flash Deals</h1>

                   </div>
                   <FlashCards productItems={productItems} />

            </div>
        </section>
           
        </>
    )
}

export default FlashDeals;