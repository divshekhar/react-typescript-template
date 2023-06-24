import { FC } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import Footer from './Footer'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import './styles.css'

import { Article } from './components/Article'

import { addArticle, removeArticle } from './store/actionCreators'
import { Dispatch } from 'redux'
import { AddArticle } from './components/AddArticle'
import React from 'react'
const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      {/* <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))} */}
      <Navbar />
      <Home />
      <Footer />
    </main>
  )
}

export default App
