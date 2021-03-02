import React from "react";

function SearchForm({handleInputChange, query, handleFormSubmit}) {
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
        />
      </div>
      <button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>
        Search
      </button>
    </form>
  );
}

export default SearchForm