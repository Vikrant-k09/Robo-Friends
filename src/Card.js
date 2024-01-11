import React from 'react';

const Card = (props) => {
    // or we can use destructuring as instead of  (props) we use ({name, email, id})
    // and use name instead of props.name and email instead of props.email
    return (
        <div className="bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5 ">
        <img alt="robots" src={`https://robohash.org/${props.id}?200x200`} />
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
        </div>
    );
}

export default Card;