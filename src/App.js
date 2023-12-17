import PageWrapper from './component/PageWrapper'
import About from './component/pages/About'
import Home from './component/pages/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </PageWrapper>
  )
}

export default App
