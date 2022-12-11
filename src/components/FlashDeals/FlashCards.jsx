import React from "react";

import Carousel from "react-elastic-carousel"


const FlashCards = ({ productItems }) =>{



    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2},
        { width: 850, itemsToShow: 3},
        { width: 1150, itemsToShow: 4},
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
          ];


    return(
        <>

<Carousel breakPoints={breakPoints}>


        {

            productItems.map((productItems) => {
    return(

    

            
           <div className="box">
               <div className="product mtop">
                <div className="img">
                    <span className="discount">{productItems.discount}% OFF</span>
                    <img src={productItems.cover} alt=''/>
                    <div className="product-like">
                      <label>0</label><br/>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                </div>
                <div className="product-details">
                   <h3>
                   {productItems.name}
                   </h3>
                   <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                   </div>
                   <div className="price">
                    <h4>

                    {productItems.price}.00
                    </h4>
                    <button>
                        <i className="fa fa-plus"></i>
                    </button>
                   </div>

                </div>
               </div>
           </div>

          )})
}
</Carousel>
        </>
    )
}

export default FlashCards;