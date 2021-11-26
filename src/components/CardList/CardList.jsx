import React from 'react'
import Card from '../Card/Card';
import './CardList.css';

export default function CardList(props) {
    console.log(props);
    return (
        <div className='card-list' >
         { props.monsters.map(monsters => <Card key={monsters.id} monsters= {monsters} /> ) }
        </div>
    )
}
