
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import EmiCalculator from './page/EmiCalculator';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <EmiCalculator/>
       <Footer/>
    </div>
  );
}

export default App;
