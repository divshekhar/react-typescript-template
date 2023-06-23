import React from 'react'
import './Card.css'
const Card = (props: any) => {
  return (
    <a className="card">
      <span className="card-title">{props.title}</span>
      <span>{props.date}</span>
    </a>
  )
}

export default Card
