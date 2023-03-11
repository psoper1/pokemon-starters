import './App.css';
import SplashPage from './components/SplashPage';
import { useState } from 'react';


function App() {

  const [page, setPage ] = useState('splash');

  return (
    <>
    <SplashPage page={page} setPage={setPage}/>
    </>
  );
}

export default App;
