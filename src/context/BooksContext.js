
import React, {useEffect, useState} from "react";


const BooksContext=React.createContext({
   books:[
       {
           id:"",
           name:"",
           author_id:null,
           ISBN:"",
           pages:"",
           book_code: ""
       }
   ],
    authors:[
        {
            id:0,
            name:"",
            surname:""
        }
    ],

    addBook:(book)=>{},
    load:()=>{},
    deleteBook:()=>{},
    bookEdit:null,
    setBookEdit:(book)=>{},
    updateBook:(book)=>{},
});

export const BooksContextProvider=(props)=>{
    const [books, setBooks]=useState([]);
    const [authors, setAuthors]=useState([]);
    const [bookEdit, setBookEdit]=useState(null);

    const load=()=> {
        fetch('http://127.0.0.1:8000/api/books')
            .then((response: Response) => {
                return response.json()
            }).then((data) => {
            setBooks(data);
        });

        fetch('http://127.0.0.1:8000/api/authors')
            .then((response: Response) => {
                return response.json()
            }).then((data) => {
                const newAuthors=[];
            //sudedame tuscius, kad rodytu tuscia pasirenkant
            newAuthors.push({
                id:"",
                name:"-",
                surname:""
            });

                //o cia ivedame kintamuosius, kad rodytu pasirinkima. Kad galetumem pasirinkti autoriu pagal varda ir pavarde
                data.forEach((author)=>{
                    newAuthors.push({
                        id:author.id,
                        name:author.name,
                        surname:author.surname
                    })
            });
               // console.log(newAuthors);
            setAuthors(newAuthors);

        });
    }

    useEffect(()=>{
        load();
        // console.log('load');
    }, []);

    const addBook=(book)=>{
        fetch("http://127.0.0.1:8000/api/books", {
            method: "POST", //*GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        }).then(()=>{
            load();
        });
    }

    const updateBook=(book)=>{
        fetch("http://127.0.0.1:8000/api/books/"+book.id, {
            method: "PUT", //*GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        }).then(()=>{
            load();
        });
    }


    const deleteBook=(index)=> {
        fetch("http://127.0.0.1:8000/api/books/"+index, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        }).then(() => {
            load();
        });
    }
    return(
        <BooksContext.Provider value={{
            books:books,
            authors:authors,
            addBook:addBook,
            load:load,
            deleteBook:deleteBook,
            bookEdit: bookEdit,
            setBookEdit:setBookEdit,
            updateBook:updateBook,

        }}>

           {props.children}
        </BooksContext.Provider>
    );
}

export default BooksContext;