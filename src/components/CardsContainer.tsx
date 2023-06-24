import { useEffect, useState } from 'react'

import './CardsContainer.css'
import SearchBar from './SearchBar'
import axios from 'axios'
import Card from './Card'

const CardsContainer = () => {
  //These are all questions objects of leetcode where each object has question id to string map
  const [questionsData, setQuestionsData]: any = useState([])

  useEffect(() => {
    getAllLeetcodeQuestions()
  }, [])
  const getAllLeetcodeQuestions = () => {
    axios
      .get('https://leetcode.com/api/problems/algorithms/')
      .then((response: any) => {
        if (response.status === 200) {
          setQuestionsData(
            response?.data?.stat_status_pairs?.map((item: any) => {
              return {
                [item?.stat.question_id]: {
                  questionTitle: item?.stat.question__title,
                  questionsTitleSlug: item?.stat.question__title_slug,
                  difficulty: item?.difficulty?.level,
                  frontend_question_id: item?.stat?.frontend_question_id,
                  totalSubmitted: item?.stat?.total_submitted,
                },
              }
            })
          )
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  return (
    <div className="cards-container">
      <SearchBar />
      {questionsData.map((question: any, index: any) => {
        const questionData: any = Object.values(question)?.[0]
        return (
          <Card
            id={questionData?.frontend_question_id}
            title={questionData?.questionTitle}
            tags={[]}
            date={'Jan 2022 3:40pm'}
          />
        )
      })}
    </div>
  )
}

export default CardsContainer
