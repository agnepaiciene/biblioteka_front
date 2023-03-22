import {useContext, useEffect, useState} from "react";
import BooksList from "./books/BooksList";
import BookNew from "./books/BookNew";
import BookEdit from "./books/BookEdit";
import BooksContext from "../context/BooksContext";


function Biblioteka(){

    const booksContext=useContext(BooksContext);
     //  const insert="new";
       let bookAction;

       if (booksContext.bookEdit===null){
           bookAction=<BookNew></BookNew>;
       }else {
           bookAction=<BookEdit book={booksContext.bookEdit}></BookEdit>;
       }

       return (
           <div className="row mt-5">
               <div className="col-md-8">
                  <BooksList></BooksList>
               </div>

               <div className="col-md-4">

                   {bookAction}
               </div>
           </div>

       );
};


export default Biblioteka;