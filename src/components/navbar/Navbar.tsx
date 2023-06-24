import { FC } from 'react'
import './Navbar.css'
import Stats from '../Stats'
const Navbar: FC = () => {
  return (
    <>
      <div className="navbar">
        <header className="navbar-text">Leetcode Diary</header>
        {/* <Stats /> */}
      </div>
    </>
  )
}

export default Navbar
