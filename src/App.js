import React from "react";
import "./App.css";
import Form from "./Form";
import Filter from "./Filter";
import Booklist from "./bookList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      error: null,
      bookFilter: "ebooks",
      printFilter: "all",
    };
  }

  handleBookType = (e) => {
    this.setState({
      bookFilter: e,
    });
  };

  handlePrintType = (e) => {
    this.setState({
      printFilter: e,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let input = e.target.search.value;

    const { bookFilter, printFilter } = this.state;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${input}&filter=${bookFilter}&printType=${printFilter}`;

    const options = {
      method: "GET",
      redirect: "follow",
    };


    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((responseJson) => {
        this.setState({
          isLoaded: true,
          items: responseJson.items,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    const { items } = this.state;

    return (
      <main>
        <header>
          <h1>Google Book Search</h1>
        </header>

        <Form handleSubmit={(e) => this.handleSubmit(e)} />
        <Filter
          handlePrintType={(e) => this.handlePrintType(e)}
          handleBookType={(e) => this.handleBookType(e)}
        />
        <Booklist items={items} />
      </main>
    );
  }
}

export default App;
