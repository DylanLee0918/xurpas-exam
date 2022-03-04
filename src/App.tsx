import React from 'react';
import Navbar from './layout/Navbar/Navbar';
import { HomePage, PokemonPage } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.css';

function App() {

  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/pokemon-details' element={<PokemonPage />}/>
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
