import React from "react"
import Carousel from "react-elastic-carousel"
import Sdata from "./Sdata"





const SlideCard = () => {

 
const breakPoints = [
  {width: 1, itemsToShow: 1}
];


 
  return (
    <>
<div className="product-container" >
    <Carousel breakPoints={breakPoints}>
               
  


                
      
        {Sdata.map((value, index) => {
          return (
            <>
            
                      <div className='box-slider box d_flex top' key={index}>
                      <div className='left'>
                        <h1>{value.title}</h1>
                        <p>{value.desc}</p>
                        <button className='btn-primary'>Visit Collections</button>
                      </div>
                      <div className='right'>
                        <img src={value.cover} alt='' />
                      </div>
                    </div>
                  
                
            
              
              
            </>
          )
        })}

</Carousel>
               </div>   

      
    
    </>
  )
}

export default SlideCard;
