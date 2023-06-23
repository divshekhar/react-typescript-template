import React from 'react'
import Card from './card'
import './CardsContainer.css'
import SearchBar from './SearchBar'
const CardsContainer = () => {
  const items = []
  for (let i = 0; i < 100; i++) {
    items.push('leet code' + i)
  }
  return (
    <div className="cards-container">
      <SearchBar />
      {items.map((item: any) => {
        return <Card id={''} title={item} tags={[]} date={'Jan 2022 3:40pm'} />
      })}
    </div>
  )
}

export default CardsContainer
