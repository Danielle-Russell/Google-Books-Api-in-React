import React from 'react';

function List (props) {
    const { items } = props;
    return(
        <ul>
        {items.map((item) => (
    <li key={item.volumeInfo.title}>{item.volumeInfo.title}</li>))}
      </ul>
    )
}

export default List