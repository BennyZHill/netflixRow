import React from 'react'
import './cards.css' 



function Card({imageUrl,body,logo}) {
    return (
    <div className='card-container'>
        <div className="card1">
       <div className='image-container'>
            <img src= {imageUrl} alt='' />
        </div>
        <div className='card-title'>
            <h1><div className='Marvel'>marvel</div> Avengers</h1>
         </div>
         <div className='card-body'>
             {body}
        </div>
        <div className="logo">{logo}</div>
        </div>

        <div className="card2">
       <div className='image-container'>
            <img src= {imageUrl} alt='' />
        </div>
        <div className='card-title'>
            <h2><div className= 'the'>the</div> witcher</h2>
         </div>
         <div className='card-body'>
             {body}
        </div>
        <div className="logo">{logo}</div>
        </div>

        
        <div className="card3">
       <div className='image-container'>
            <img src= {imageUrl} alt='' />
        </div>
        <div className='card-title'>
           <h3>A silent <div className='voice'>voice</div></h3>
         </div>
         <div className='card-body'>
             {body}
        </div>
        <div className="logo">{logo}</div>
        </div>
    </div>
    )
}


export default Card