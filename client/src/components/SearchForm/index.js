import React, {useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";


function SearchForm({handleInputChange, query, handleFormSubmit}) {
  // const search = useRef();
  // const [state, dispatch] = useStoreContext()
  return (
    <form>
      <div className="form-group">
        <label for="bookTitle">Book</label>
        <input
          type="text"
          className="form-control"
          id="bookTitle"
          placeholder="Enter Book"
          onChange ={handleInputChange}
          value = {query}
          name = "search"
          // ref={search}
        />
      </div>
      <button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>
        Search
      </button>
    </form>
  );
}

export default SearchForm