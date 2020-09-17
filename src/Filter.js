import React from "react";

function Filter(props) {
    const { handlePrintType, handleBookType } = props;
  return (
    <div id="filter">
      <form onChange={(e) => handlePrintType(e.target.value)}>
      <label className="label" htmlFor="#select">Print Type:</label>
        <select id="select">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </form>
      <form onChange={(e) => handleBookType(e.target.value)}>
      <label className="label" htmlFor="#select2">Book Type:</label>
        <select id="select2">
          <option value="ebooks">All ebooks</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
          <option value="partial">Partially Available ebooks</option>
          <option value="full">Fully Available ebooks</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
