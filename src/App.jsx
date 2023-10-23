import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  return (
    
    <BrowserRouter>
      <div className='app'>
        
        <Routes>
          <Route path='/login' element={<h1>Login Page</h1>} />
          <Route path='/checkout'
            element={
              <>
              <Header />
              <Checkout />
              </>
            } />
          <Route path='/'
            element={
              <>
              <Header />
              <Home />
              </>
            } />
        </Routes>
           
          
     
      </div>
      
    </BrowserRouter>

   
  );
}

export default App;
