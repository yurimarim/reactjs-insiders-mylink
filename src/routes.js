import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Links } from './pages/Links'
import { PageError } from './pages/PageError'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<PageError />} /> {/*  Not Found Page */}
      </Routes>
    </BrowserRouter>
  )
}
