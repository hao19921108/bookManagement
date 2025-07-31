import React,{ useEffect, useState} from 'react';
import './BookItem.css';

const BookItem =({ book , isSelected , onClick })=>{


   return (
        <>
            <div className= {`card ${isSelected ? 'selected' : ''}`}
             onClick={() => onClick(book)} 
          
             > 
                
                <div className='Title'>
                <div className="subTitle">Title</div>
                <div className="bookTitle"> {book.title}</div>
                </div>

                <div className='Author'>
                <div className="subTitle">Author</div>
                <div className="names">
                <div>{book.authors[0]?.name}</div>
                {book.authors.slice(1).map((author, index) => (
                    <div key={index}>{author.name}</div>
                ))}
            </div>
                </div>
            </div>
        </>
    );

}

export default BookItem;
