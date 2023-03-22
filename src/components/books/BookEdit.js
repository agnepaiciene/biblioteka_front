import {useContext, useState} from "react";
import BooksContext from "../../context/BooksContext";

function BookEdit(props){
    const booksContext=useContext(BooksContext);

    // const newBook={
    //     id:"",
    //     name:"",
    //     author_id:null,
    //     ISBN:"",
    //     pages:"",
    //     book_code:"",
    // };
    const [book, setBook]=useState(props.book);

    const change=(event)=>{
        const id=event.target.id;
        //console.log(event.target.value)


        setBook({
            ...book,
            [id]:event.target.value
            });
    }

    const save=(event)=>{
        event.preventDefault();
      //  console.log(book);
        booksContext.updateBook(book)
        booksContext.setBookEdit( null);

    }

    // const add=(event)=>{
    //     event.preventDefault();
    //     booksContext.addBook(book);
    //     setBook(newBook);
    //
    // }

     const authorOptions=[];

      booksContext.authors.forEach((author)=>{
          authorOptions.push(<option key={author.id==""?0:author.id} value={author.id}>{author.name} {author.surname}</option> )
    });

      const cancel=()=>{
          booksContext.setBookEdit(null);
      }

      // console.log(book);
    return(
        <div className="card">
            <div className="card-header fw-bold">Įrašų redagavimas</div>
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
                    <button className="btn btn-success" onClick={save}>Išsaugoti</button>
                    <button className="btn btn-primary float-end" onClick={cancel}>Atšaukti</button>

                </form>
            </div>
        </div>
    )
}

export default BookEdit;