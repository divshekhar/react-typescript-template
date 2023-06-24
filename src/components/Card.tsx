import React from 'react'
import './Card.css'
import leetcodeSVG from '../assets/images/leetcode.svg'
const Card = (props: any) => {
  return (
    <div className="card">
      <span className="card-title">{props.title}</span>
      <span>{props.date}</span>

      <a className="leetcode-link" href={`https://lcid.cc/${props?.id}`}>
        <img className="leetcode-image" width={20} src={leetcodeSVG}></img>
      </a>
    </div>
  )
}

export default Card
