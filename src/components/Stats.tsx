import React, { useEffect, useState } from 'react'
import './Stats.css'
import axios from 'axios'
const Stats = (props: any) => {
  const [statsData, setStatsData]: any = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  // get posts
  const getPosts = () => {
    axios
      .get('https://leetcode-stats-api.herokuapp.com/rakeshreddy512')
      .then((response) => {
        if (response.status === 200) {
          setStatsData(response?.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="stats-container">
      <div>Easy - {statsData?.easySolved}</div>
      <div>Medium - {statsData?.mediumSolved}</div>
      <div>Hard - {statsData?.hardSolved}</div>
    </div>
  )
}

export default Stats
