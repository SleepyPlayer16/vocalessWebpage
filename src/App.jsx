import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Construction from './views/construction'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Construction/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
