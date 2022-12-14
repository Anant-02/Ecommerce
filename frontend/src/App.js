import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


const App = () => {
  return (
    <Router>
    <Header></Header>
        <main className = 'py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact ></Route>
            <Route path='/product/:id' element={<ProductScreen />}></Route>
          </Routes>
        </Container>    
        </main>
    <Footer></Footer>    
    </Router>
  )
}

export default App;