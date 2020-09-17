import React from "react";

function BookList(props) {
  const { items } = props;
  return (
    items.map((item) => (
      <div id="books">
      <img src = {item.volumeInfo.imageLinks.thumbnail} alt= "book-cover"></img>
       <ul>
        <li id="title" key={item.volumeInfo.title}>{item.volumeInfo.title}</li>
        <li id="author" key={item.volumeInfo.authors}>Author: {item.volumeInfo.authors}</li>
        <li key={item.saleInfo.listPrice.amount}>Price: ${item.saleInfo.listPrice.amount}</li>
        <li key={item.volumeInfo.description}>{item.volumeInfo.description}</li>
        </ul>
        </div>
    ))
  );
}



export default BookList;
