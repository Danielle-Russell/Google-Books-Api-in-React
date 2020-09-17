import React from 'react';

class Book extends React.Component {
    render () {
        return(
            <div className = "book">
                <h2>{this.props.title}</h2>
                <h3>{this.props.author}</h3>
                <h4>{this.props.price}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Book