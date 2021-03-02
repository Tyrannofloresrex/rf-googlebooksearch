import React, { useEffect, useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/api";
import { SET_CURRENT_BOOK, LOADING, ADD_BOOK } from "../utils/actions";
import Jumbotron from "../components/Jumbotron/index";
import SearchForm from "../components/SearchForm";

const Home = (props) => {
  const titleRef = useRef();
  const descRef = useRef();
  const imgRef = useRef();
  const linkRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();
  const search = useRef();

  useEffect(() => {
    API.searchBooks(search)
      .then((res) => dispatch({ type: SET_CURRENT_BOOK, book: res.data }))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.searchBooks(search)
      .then((res) => {
        dispatch({ type: SET_CURRENT_BOOK, book: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    // API.saveBook({
    //   title: titleRef.current.value,
    //   description: descRef.current.value,
    //   author: authorRef.current.value,
    //   link: linkRef.current.value,
    //   image: imgRef.current.value
    // })
    //   .then(result => {
    //     dispatch({
    //       type: ADD_BOOK,
    //       post: result.data
    //     });
    //   })
    //   .catch(err => console.log(err));

    // titleRef.current.value = "";
    // descRef.current.value = "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // search={name,value}
  };
  return (
    <div className="jumbotron">
      <header>React Google Book Search</header>
      <Jumbotron>
        <SearchForm
          handleInputChange={handleInputChange}
          handleFormSubmit={handleSubmit}
        />
      </Jumbotron>
      <h2>Results</h2>
      {/* {console.log(state.currentBook.items)} */}
      <>
        {state.currentBook.items ? (
          <>
            {state.currentBook.items.map((book) => {
              return(
              <Jumbotron>
                title:
                <h1>{book.volumeInfo.title}</h1>
                by  <h2>{book.volumeInfo.title}</h2>
              </Jumbotron>
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
