import './App.css';
import api from './api/axioConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import {Home} from './components/Home/home';
import {AjoutLivre} from './components/AjoutLivre/ajoutLivre';

function App() {
  const [livres, setLivres] = useState([]);
  const getLivres = async () => { 
    try{
      const response = await api.get('/api/v1/livres/getAll');
      setLivres(response.data);
      
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getLivres();
  }, [])
  
  // useEffect(() => {
  //   console.log(livres);
  // }, [livres])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home livres={livres}/>} />
          <Route path='/ajout' element={<AjoutLivre/>}></Route>
        </Route>
        
      </Routes>
        
    </div>
  );
}

export default App;
