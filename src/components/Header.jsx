import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import PostsPage from '../pages/PostsPage'
import ReadingsPage from '../pages/ReadingsPage'
import TwitterIcon from '../icons/TwitterIcon'
import InstagramIcon from '../icons/InstagramIcon'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'

export default function Header() {
  return (
    <>
      <div className="flex p-3 m-5 justify-between">
        <nav className="space-x-3 ">
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/about">Hakkımda</NavLink>
          <NavLink to="/posts">Yazılarım</NavLink>
          <NavLink to="/readings">Okuduklarım</NavLink>
        </nav>
        <div className="flex space-x-3">
          <NavLink to="https://twitter.com/uccergel" target="_blank">
            <TwitterIcon />
          </NavLink>
          <NavLink to="https://instagram.com/uccergel" target="_blank">
            <InstagramIcon />
          </NavLink>
          <NavLink to="https://github.com/uccergel" target="_blank">
            <GithubIcon />
          </NavLink>
          <NavLink
            to="https://tr.linkedin.com/in/u%C4%9Fur-cem-%C3%A7ergel-92356a127"
            target="_blank"
          >
            <LinkedinIcon />
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/readings" element={<ReadingsPage />} />
      </Routes>
    </>
  )
}
