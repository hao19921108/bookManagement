import React, { useState, useEffect } from 'react';
import BookItem from '../components/BookItem.jsx';
import Cart from '../components/Cart.jsx'
import NoBookFound from '../components/NoBookFound.jsx';
import axios from 'axios';

import './BookList.css';

const BookList = () => {
  console.log('BookList rendered');

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [ selected, setSelected] = useState([]);
  const [filtedBookList, setFiltedBookList ] = useState([]);

  useEffect(()=>{

    const url = "https://openlibrary.org/subjects/world.json";
    axios.get(url).then(resp =>{
      console.log(resp.data.works);
      setBooks(resp.data.works);
      setFiltedBookList(resp.data.works);

    }).catch(error=>{
      console.error('Error fetching data : ' , error);
    })

  },[]);

 const toggle = (book)=>{

    setSelected(prev=>{
      const isSelected = prev.find( b=> b.key === book.key);
      if(isSelected){
        return prev.filter(b=> b.key!== book.key);
      }else{
        return [...prev,book];
      }

    })

 }

 const filterContent = ( word ) =>{
    // setSearch(prev=>{ return [...prev,word]});
    setSearch(word);
    if(word ===''){

      setFiltedBookList(books);

    }else{

    //    setBooks(prev=>{
    //   return prev.filter( b => b.title.toLowerCase().includes(word.toLowerCase()));
    // })

    setFiltedBookList( books.filter( b=>
       b.title.toLowerCase().includes(word.toLowerCase()) || b.authors.some(a => a.name.toLowerCase().includes(word.toLowerCase()))
      ));

    


    }
   
    console.log(word);
 }


  return (
    <>
    <div className="wrapper">
      <div className ="header-section">
    <div className='container'>
      <div>Search</div>
      <input type="text" placeholder='Please enter Book name or author name' id="searchBox"
      value={search} onChange={(e)=> filterContent(e.target.value)} />
    </div>

    <div className="container">
      <Cart selected = { selected } cancel={toggle}/>
      </div>

      </div>
    
    <div className='content'>
    <div className="container">
      <div className="bookList-title"> Book List </div>
      <div className="book-list"> 
        {filtedBookList.length >0 ? (
        filtedBookList.map( book => (
        <BookItem key={book.key} book={book} 
          isSelected={selected.some(b => b.key === book.key)}
          onClick = {toggle}/>
      ))
    ):(
        <NoBookFound />
      )}
      </div>
    </div>
    </div>
    </div>
    </>

  );
};

export default BookList;
