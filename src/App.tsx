import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Contact, HomePage } from './pages'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
