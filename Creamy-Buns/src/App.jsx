import './App.css'
import Pedidos from './components/Pedidos'
import Recetario from './components/Recetario'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import HomeScreen from './components/HomeScreen'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/recetario' element={<Recetario/>}/>
          <Route path='/pedidos' element={<Pedidos/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
