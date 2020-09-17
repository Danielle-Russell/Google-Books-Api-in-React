import React from "react";
import './form.css';

function Form(props) {
  const { handleSubmit } = props;

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input name="search" type="text" id="search" />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
