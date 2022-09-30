
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Home_carosul } from './Components/Home_carosul/Home_carosul';
import Home from './Pages/Home';
import Products from './Pages/Products';
import AllRoutes from './Pages/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      
            
    </div>
  );
}

export default App;
