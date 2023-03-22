import {useContext, useEffect, useState} from "react";
import Book from "./Book";
import BooksContext from "../../context/BooksContext";

function BooksList(){
    const booksContext=useContext(BooksContext);

    const booksList=[];
    booksContext.books.forEach((book) => {
        booksList.push(<Book key={book.id} book={book}></Book>);
    });

    return(
        <div className="card">
            <div className="card-header fw-bold">Knygų sąrašas</div>
            <div className="card-body">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Knygos Nr. </th>
                        <th>Knygos pavadinimas  </th>
                        <th>Autorius</th>
                        <th>ISBN</th>
                        <th>Puslapų kiekis</th>
                        <th>Knygos šifras</th>
                    </tr>
                    </thead>

                    <tbody>
                    {booksList}
                    </tbody>
                </table>
            </div>
        </div>
  );
}

export default BooksList;