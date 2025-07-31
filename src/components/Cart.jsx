import React, {useEffect, useState} from 'react';
import './Cart.css';

const Cart = ({selected ,cancel}) =>{

    return(<>
 
        <div className='cartContainer '>
         <h3>Cart ({selected.length} selected)</h3>
        <div className='cartItems'>
    {selected.map( select  =>  (

           <div className='miniCard'  key={select.title} >
            <div className='textCombo'>
         <div className="subTitle">Title</div>
        <div className="bookTitle"> {select.title}</div>
        </div>
        <button className='cancel' onClick={ e=> { cancel (select)}}>cancel</button>
    </div>

            
        ))}
    </div>
    </div>
    
    </>)



}

export default Cart;