import { BrowserRouter, Route, Routes } from 'react-router'
import './styles/App.css'
import './styles/global.css'
import { About, Contact, Contribute, HomePage, Packages, Services } from './pages'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='services' element={<Services />}></Route>
        <Route path='packages' element={<Packages />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contribute' element={<Contribute />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
