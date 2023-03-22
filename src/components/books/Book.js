
import {useContext} from "react";
import BooksContext from "../../context/BooksContext";

function Book(props){
    const booksContext=useContext(BooksContext);
    const del= ()=>{
        booksContext.deleteBook(props.book.id);
    };

    const edit=()=>{
        booksContext.setBookEdit(props.book);
    }

    const editButton=(booksContext.bookEdit===null)?(<button className="btn btn-primary text-light" onClick={edit}>Redaguoti</button>):"";

    return (
        <tr key={props.book.id}>
            <td>{props.book.id}</td>
            <td>{props.book.name}</td>
            <td>{props.book.author!=null? props.book.author.name+" "+props.book.author.surname+" " :"-"}</td>
            <td>{props.book.ISBN}</td>
            <td>{props.book.pages}</td>
            <td>{props.book.book_code}</td>
            <td>{editButton}</td>
            <td><button className="btn btn-danger" onClick={del}> Trinti</button></td>
        </tr>
    );
}

export default Book;