import { BrowserRouter, Route, Routes } from 'react-router'
import './styles/App.css'
import './styles/global.css'
import { Contact, HomePage, Services } from './pages'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='services' element={<Services />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
