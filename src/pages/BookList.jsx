import React, { useState, useEffect } from 'react';
import BookItem from '../components/BookItem.jsx';
import axios from 'axios';

import './BookList.css';

const BookList = () => {
  console.log('BookList rendered');

  return (
    <div className="bookList-container">
      <div className="bookList-title"> Book List </div>
      <div className="book-list"></div>
    </div>
  );
};

export default BookList;
