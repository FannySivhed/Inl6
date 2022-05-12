import React from 'react'

export default function Movie(props) {
    console.log(props);

    const getStars = (rating) => {
        let stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(<img src="/star.png" alt="Star" />);
        }
        
        return stars;
    }

    return (
        <li className="list-group-item">
            { props.item.title }
            { getStars(props.item.rating) }
            <img src="/delete.png" onClick={() => {props.deleteItem(props.item.id)}}/>
        </li>
    )
}