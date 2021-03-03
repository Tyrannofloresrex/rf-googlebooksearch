import React, { useEffect, useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/api";
import { SET_CURRENT_BOOK, LOADING, ADD_BOOK } from "../utils/actions";
import Jumbotron from "../components/Jumbotron/index";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";

const Home = (props) => {
  const titleRef = useRef();
  const descRef = useRef();
  const imgRef = useRef();
  const linkRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();
  const searchRef = useRef();

  // useEffect(() => {
  //   const search = searchRef.current.value
  //   API.searchBooks(search)
  //     .then((res) => dispatch({ type: SET_CURRENT_BOOK, book: res.data }))
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    console.log(searchRef.current.value)
    API.searchBooks(searchRef.current.value)
      .then((res) => {
        dispatch({ type: SET_CURRENT_BOOK, book: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleSave = (bookId) => {
    dispatch({type:LOADING});
    console.log(bookId)
    // const saveBook = state.book.find(bookElem => bookElem.id === bookId);
    // console.log("save book", saveBook)
    // API.saveBook({
    //   title: titleRef.current.value,
    //   description: descRef.current.value,
    //   authors: authorRef.current.value,
    //   link: linkRef.current.value,
    //   image: imgRef.current.value
    // })
    //   .then(result => {
    //     dispatch({
    //       type: ADD_BOOK,
    //       book: result.data
    //     });
    //   })
    //   .catch(err => console.log(err));

    // titleRef.current.value = "";
    // descRef.current.value = "";
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    searchRef.current={name, value}
  };
  return (
    <div>
      <header>React Google Book Search</header>
      <Jumbotron>
        <SearchForm
          handleInputChange={handleInputChange}
          handleFormSubmit={handleSubmit}
          // query={search}
        />
      </Jumbotron>
      <h2>Results</h2>
      {/* {console.log(state.currentBook.items)} */}
      <>
        {state.currentBook.items ? (
          <>
            {state.currentBook.items.map((book) => {
              return(
              <Card
              title= {book.volumeInfo.title} 
              authors={book.volumeInfo.authors ? book.volumeInfo.authors .join(","): "anonymous"}
              link ={book.volumeInfo.infoLink}
              description={book.volumeInfo.description}
              image ={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "No Image"}
              buttonClick = {() =>{handleSave(book.id)}}
              />
              
              )
            })}
          </>
        ) : (
          <div>loading...</div>
        )}
      </>
    </div>
  );
};

export default Home;
