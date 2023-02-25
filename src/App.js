import './App.css';
import  { useState } from 'react'
import Header from './Components/Header'
import Theme from './Components/Theme'
function App() {
  const [darktheme, setDarktheme] = useState(false)
  return (

    <div className="App">
    <Header theme={darktheme} setDarktheme={setDarktheme}/>
    <Theme theme={darktheme}/>
  
      </div>
  );
}

export default App;



