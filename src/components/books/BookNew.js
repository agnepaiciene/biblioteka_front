import {useContext, useState} from "react";
import BooksContext from "../../context/BooksContext";

function BookNew(){
    const booksContext=useContext(BooksContext);

    const newBook={
        id:"",
        name:"",
        author_id:null,
        ISBN:"",
        pages:"",
        book_code:"",
    };
    const [book, setBook]=useState(newBook);

    const change=(event)=>{
        const id=event.target.id;
        //console.log(event.target.value)


        setBook({
            ...book,
            [id]:event.target.value
            });
    }

    const add=(event)=>{
        event.preventDefault();
        booksContext.addBook(book);
        setBook(newBook);

    }

     const authorOptions=[];

      booksContext.authors.forEach((author)=>{
          authorOptions.push(<option key={author.id==""?0:author.id} value={author.id}>{author.name} {author.surname}</option> )
    });

      console.log(book);
    return(
        <div className="card">
            <div className="card-header fw-bold">Pridėti naują įrašą</div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Pavadinimas</label>
                        <input id="name" type="text" className="form-control" onChange={change} value={book.name}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Autorius:</label>
                        {/*<input id="author_id" type="text" className="form-control" onChange={change} value={book.author_id}/>*/}

                        <select id="author_id" className="form-select" onChange={change} value={book.author_id}>
                            {authorOptions}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">ISBN</label>
                        <input id="ISBN" type="text" className="form-control" onChange={change} value={book.ISBN}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Puslapių skaičius</label>
                        <input id="pages" type="text" className="form-control" onChange={change} value={book.pages}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Knygos šifras</label>
                        <input id="book_code" type="text" className="form-control" onChange={change} value={book.book_code}/>
                    </div>
                    <button className="btn btn-success" onClick={add}>Pridėti</button>
                </form>
            </div>
        </div>
    )
}

export default BookNew;