import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import PostsPage from '../pages/PostsPage'
import ReadingsPage from '../pages/ReadingsPage'

export default function Header() {
  return (
    <div className="mb-7">
      <nav className="space-x-3">
        <NavLink to="/">Ana Sayfa</NavLink>
        <NavLink to="/about">Hakkımda</NavLink>
        <NavLink to="/posts">Yazılarım</NavLink>
        <NavLink to="/readings">Okuduklarım</NavLink>
      </nav>
      <div>
        {/* <NavLink to="https://twitter.com/uccergel">Twitter</NavLink> */}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/readings" element={<ReadingsPage />} />
      </Routes>
    </div>
  )
}
