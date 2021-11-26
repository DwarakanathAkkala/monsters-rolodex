import React from 'react'

import './Card.css'

export default function Card(props) {
    return (
        <div className="card-container" >
            <img alt="Monster_Image" src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} />
            <h2> {props.monsters.name} </h2>
            <p>{props.monsters.email}</p>
        </div>
    )
}
